import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Carouser from "../components/Carouser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search,setsearch]=useState('');
  const [fooditem, setfooditem] = useState([]);
  const [foodcat, setfoodcat] = useState([]);

  const loaddata = async () => {
    const response = await fetch("http://localhost:5000/api/foodcat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respon = await response.json();
    // console.log(respon[0],respon[1]);
    setfooditem(respon[0]);
    setfoodcat(respon[1]);

    // console.log(response);
  };

  useEffect(() => {
    loaddata();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carouser />
      </div>
      <div>
      <div className="active-pink-3 active-pink-4 mb-4" >
    <input className="search" style={{width:300}} type="text" placeholder="Search" aria-label="Search" values={search} onChange={(e)=>{setsearch(e.target.value)}}/>
    {/* <button class="btn btn-secondary my-2 my-sm-0"  type="submit">Search</button> */}
    </div>
      </div>
      <div className="container">
        {fooditem !== [] ? (
          fooditem.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodcat !== [] ? (
                  foodcat
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filteritem) => {
                      return (
                        <div
                          key={filteritem._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Cards
                            foodName={filteritem.name}
                            options={filteritem.options[0]}
                            imgSrc={filteritem.img}
                          ></Cards>
                        </div>
                      );
                    })
                ) : (
                  <div>error</div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
