import react from 'react';
import './user.css';
import bg from './bgg.jpg';

function User() {

    return (
        <>

            <img className='img0' src="https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D" />
            <div>
                <img className='img1' src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13809-ull-rln-sqvare-pc-c2-sunglasses_15_april_male_shoot12373.jpg" />

                <h4 style={{ marginLeft: "55%", marginBottom: "10%", marginTop: "-10%" }}>Anuj Nagar</h4>

                <div className='following' style={{ display: 'flex', marginLeft: '54%', marginTop: "-10%", color: "grey" }}>
                    <div>

                        <button >6490</button>
                        <h3 className='ft' style={{ fontSize: "10px" }}>Followers</h3>
                    </div>
                    <div style={{ marginLeft: "5%" }}>
                        <button>690</button>
                        <h3 className='ft' style={{ fontSize: "10px" }}>Following</h3>
                    </div>
                </div>
                <h3 style={{ textAlign: "center", margintop: '-2%' }}>Co-founder & CEO at Terribly Tiny Tales</h3>
                <a href='instagram.com' style={{ marginLeft: "10%", textDecoration: "none", marginTop: "-20%" }}>http://www.instagram.com/anujhosalia</a>

                <div style={{ display: "flex",justifyContent:"space-around", margintop: "15%" }}>
                    <img src='https://w7.pngwing.com/pngs/968/897/png-transparent-facebook-like-logo-facebook-like-button-computer-icons-facebook-blue-text-logo.png' style={{ height: "25px", width: "25px", borderRadius: "100%",marginleft:"15%" }} />

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UXQRPEYmP_sEyMxo4wATOZrzweM5uX-IEw&usqp=CAU' style={{ height: "25px", width: "25px", borderRadius: "100%",marginleft:"15%" }} />

                    <img src='https://t3.ftcdn.net/jpg/00/94/22/12/360_F_94221253_fAgv0Jym53ysz7nwoqXRmkb6GAKwNsfs.jpg' style={{ height: "25px", width: "25px", borderRadius: "100%",marginleft:"15%" }}/>
                    <img src='https://static-00.iconduck.com/assets.00/share-icon-2048x1911-60w04qpe.png' style={{ height: "25px", width: "25px", borderRadius: "100%",marginleft:"15%" }}/>
                    <img src='https://lh3.googleusercontent.com/5FaaHnPzyF1m75JSsdWC3Jx6lYsC8efsiPoJhGkhBFdUhz9jp0JiyXmV28JQZmgRVvv6KjRaf4-PKh-Gu2WanAbhcQ=w128-h128-e365-rj-sc0x00ffffff' style={{ height: "25px", width: "25px", borderRadius: "100%",marginleft:"15%" }}/>


                </div>
                <hr/>
                <div>
                   <div style={{display:"flex"}}>
                    <h4>A Changing Worldorder </h4>
                    <div style={{marginTop:"20px",marginLeft:"130px"}}><img src='https://t3.ftcdn.net/jpg/00/94/22/12/360_F_94221253_fAgv0Jym53ysz7nwoqXRmkb6GAKwNsfs.jpg' style={{ height: "25px", width: "25px", borderRadius: "100%",}}/></div>
                   </div> 
                   <h5>The world is changing at a feverish pace, Friends,colleagues and everyone engaged in knowledge work are beginning to sense this,including ...</h5>
                <div style={{display:"flex"}}>
                   <h5 style={{color:"blueviolet"}}>musing</h5>
                   <h5>by anujgosalia</h5>

                   <h5 style={{marginLeft:"12px"}}>January 21 . 1min Read.156 Views</h5>
                   </div>
                </div>
                <hr/>
                <div>
                   <div style={{display:"flex"}}>
                    <h4>Indian V/s Australia </h4>
                    <div style={{marginTop:"20px",marginLeft:"150px"}}><img src='https://t3.ftcdn.net/jpg/00/94/22/12/360_F_94221253_fAgv0Jym53ysz7nwoqXRmkb6GAKwNsfs.jpg' style={{ height: "25px", width: "25px", borderRadius: "100%",}}/></div>
                   </div> 
                   <h5>The world is changing at a feverish pace, Friends,colleagues and everyone engaged in knowledge work are beginning to sense this,including ...</h5>
                <div style={{display:"flex"}}>
                   <h5 style={{color:"blueviolet"}}>musing</h5>
                   <h5>by anujgosalia</h5>

                   <h5 style={{marginLeft:"12px"}}>January 21 . 1min Read.156 Views</h5>
                   </div>
                </div>
                <hr/>
                <div>
                   <div style={{display:"flex"}}>
                    <h4>Write To Build </h4>
                    <div style={{marginTop:"20px",marginLeft:"190px"}}><img src='https://t3.ftcdn.net/jpg/00/94/22/12/360_F_94221253_fAgv0Jym53ysz7nwoqXRmkb6GAKwNsfs.jpg' style={{ height: "25px", width: "25px", borderRadius: "100%",}}/></div>
                   </div> 
                   <h5>The world is changing at a feverish pace, Friends,colleagues and everyonework are beginning to sense this,including ...</h5>
                <div style={{display:"flex"}}>
                   <h5 style={{color:"blueviolet"}}>musing </h5>
                   <h5>by anujgosalia</h5>
                   <h5 style={{marginLeft:"2px"}}>Novemb 21 . 1min Read.156 Views</h5>
                   </div>
                </div>
            </div>
        </>


    );
};

export default User;