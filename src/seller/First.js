import React from 'react'
import './First.css'

const First = () => {
  return (
  
    <>
    <main className='firstMain'>
   <form action="">
    <h1 className='firsth1'>BECOME A SELLER</h1>
    <p>You're almost there. Just fill this form</p>
    <div className="firstNum">
     <p className='actNum'>1</p>
     <hr />
     <p className='actNum'>2</p>
     <hr />
     <p className='actNum'>3</p>
    </div>
    <input type="text" name="" id=""  placeholder='Business Name'/>
    <div className="fistBuss">
        <div className="firstLogo">
            <h1>Add your business Logo</h1>
            <div className="dash">
                <div>
                <img
                src={require("../Images/Group.png")}
                
                alt=""
                id="profileImage"
             
              />
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                />
                </div>
                <div className="barFirst">
                <span className="loadFirst"></span>
                </div>
            </div>
            <div className="firstRule">
                <div>
                    <img src={require("../Images/Vector.png")} alt="" />
                </div>
                <div>
                    <ol>
                        <li>Make sure your logo is visible</li>
                        <li>Not too much flashy colors</li>
                        <li>A PNG, JPEG is advisible</li>
                        <li>This is for your brand</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div className='firstArea'>
 <p>Business Desciption</p>
 <textarea name="" id="" cols="30" rows="10" placeholder='(At least 459 words)'></textarea>
 <button type='submit'>Next</button>
    </div>
   </form>
    </main>
    </>
  )
}

export default First