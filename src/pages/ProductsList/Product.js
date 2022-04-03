import { Link } from "react-router-dom";
import "./Product.css";

import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import Chart from "../../components/Chart/Chart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Product() {
    const [Industry, setIndustry] = useState();
    const params = useParams();
   
    useEffect(() => {
      async function fetchMyAPI() {
        let response = await axios.get("http://nahoor.af:8080/nahoor/product/" + params.id);
        setIndustry(response.data);
      }
      fetchMyAPI();
    }, []);
    console.log("Industry",Industry)
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">محصولات</h1>
        <Link to="newproduct">
          <button
            className="productAddButton"
            style={{ fontFamily: "Shabnam", whiteSpace: "nowrap" }}
          >
            اضافه کردن محصول جدید
          </button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={Industry?.place_holder_image}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{Industry?.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">میزان فروش:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">موجود در انبار:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>

        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>نام محصول</label>
            <input type="text" value={Industry?.name} />


            <label>موجودی در انبار</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
              src={Industry?.place_holder_image}
              alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
