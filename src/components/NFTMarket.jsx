import React, { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api, useMoralisQuery} from 'react-moralis';
import { Card, Image, Tooltip, Modal, Input, Skeleton } from "antd";
import {
    FacebookFilled,
	FileSearchOutlined,
	SendOutlined,
	ShoppingCartOutlined,
} from "@ant-design/icons";
import { getExplorer } from "helpers/networks";

/* 
#################################################################
################	Experimental Explore Page	#####################
#################################################################
*/

const NFTMarket = () => {
    const { Moralis, chainId} = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const [count, setCount] = useState(0);
    const [nftObject, setnftObject] = useState({});
    const [nftArray, setNftArray] = useState([]);
    const [artist, setArtist] = useState('');
   // const fetch = useMoralisQuery();

    

   async function getNFTListings(){
        const web3 = await Moralis.enableWeb3(); 
        const queryAll = new Moralis.Query('CreatedMarketItems');
        queryAll.equalTo('sold' , false);
        const data = await queryAll.find();
        console.log("this is data" ,data[0].type);
        nftArray = [];
        for (let i=0; i< data.length; i++){
            const metadataInfo = await fetch(data[i].get("token_uri"));
            const metadata = await metadataInfo.json();
            const nft = {"object_id":data[i].id, "token_id":data[i].get("token_id"),"token_uri":data[i].get("token_uri"),"contract_type":data[i].get("contract_type"),"token_address":data[i].get("token_address"),"image":metadata["image"],"name":metadata["name"],"description":metadata["description"]}
            nftArray.push(nft)
        }
        return nftArray ;
        
    }
    
    console.log("this is array" ,nftArray);




    /*const fetchAllTokenIds = async () => {
        
        const options = {
            address: "0xB74bf94049D2c01f8805B8b15Db0909168Cabf46", // <artist>
            chain: 'rinkeby',
            limit: 50
        }

        

        const NFTs = await Web3Api.token.getAllTokenIds(options);
        let total = NFTs.result.length;
        
        setCount(total);
        // console.log(total);

        setNftArray([...NFTs.result])
        // console.log(NFTs.result);

        setnftObject(NFTs)
        // console.log(nftObject)
    } */

    // useEffect(()=> {
    //     console.log('this is from useEffect artist: ', artist)
    // }, [artist])

    useEffect(() => {
        getNFTListings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return(
        <div className='explore'>
            <h4>NFT Collection Total is {count}</h4>
            
			{/*  #############################################################################################
				 ###### The following is used to create a selector for a few choices of nft collections ######
				 #############################################################################################

			<h5>Select an artist</h5>
            <div className='select'>
                <select className="form-select" aria-label="Default select" onChange={handleSelectOption}>
                    {/* <option selected>Select Artist</option> 
                    <option value="0xE93C817Ed22EA606B2a948C1536013013F34DBB9">Mutant Ape Yacht Club</option>
                    <option value="0x2995EdF91516499909a5b2565F95F3CD7F8e5Beb">Cool Cat</option>
                    <option value="0xa7a26b29d4530Ac7EAAFd8238474979508eE2D27">Hodge Podge</option>
                </select>
            </div>
			*/}

			
            {nftObject? 
                <div className='card-row'>
                {nftArray.map((items, index) => {
                    // eslint-disable-next-line no-lone-blocks
                    {/* console.log(items) */}
                    const {metadata, token_id, token_uri} = items
                    const metaData = JSON.parse(metadata)
                    
                    const {name, description, image} = metaData;
                    
                    return (
                        <Card
								hoverable
								key={index}
								actions={[
									
									<Tooltip
										title='View On Blockexplorer'
                                        key={index}>
										<FileSearchOutlined
											onClick={() =>
												window.open(
													`${getExplorer(
														chainId,
													)}address/${
														items.token_address
													}`,
													"_blank",
												)
											}
										/>
									</Tooltip>,

									<Tooltip
										title='Place Bid'
                                        key={index}>
										<ShoppingCartOutlined
                                            key={index}
											onClick={() =>
												alert(
													"EZPZ INTEGRATION COMING!",
												)
											}
										/>
									</Tooltip>,
								]}
								style={{
									width: 240,
									border: "2px solid #e7eaf3",
								}}
								cover={
									<img
                                        className="card-img-top" 
                                        src={"https://ipfs.infura.io/ipfs/"+image.split("//")[1]}
                                        alt="Card img cap" 
                                        style={{maxHeight: "300px"}}
										key={index}
									/>
								}>
								<Card.Meta
									title={name}
									description={description}
                                    style = {{color: "#0000000"}}
								/>
							</Card>
                    )  
                })}
            </div>
            
            : 
            <></>}
            
        </div>
    )
}

export default NFTMarket;