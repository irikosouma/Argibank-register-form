import React, {useState, useEffect} from 'react'
//styles
import {Bound} from './index.styles';
import "./css/fancy.min.css";
import './css/base.min.css';
import './css/main.css';
//image
import logo from '../../../assets/images/logo.png'
const mockData = 
  {
    OtherCardNumber: "0239943123",
    RegisForInternet: "452342425",
    Branch: "Kỳ Đồng",
    Notification: "SMS phone",
    Occupation: "Director",
    Address: "63 Ky Dong street, District 1, Ho Chi Minh city ",
    PartnerAddress: "109 Bui Thi Xuan street, District 1, Ho Chi Minh city ",
    OtherNotification: "Cellphone",
    CellphoneOTP: "32423554354",
    UserName: "Nguyen Van D",
    ServiceuserCode: "9423434",
    Date: "09",
    Month: "03",
    Year: "2020",
    
    DateIssue: "13",
    MonthIssue: "02",
    YearIssue: "2020",
    Place: "HCM",
    CifNumber: "309432434",
    Phone: "0283933103",
    CifValid: "09/07/2020",
    Account1: "09493103230",
    TypeOfMoney1: "Cash",
    Valid1: "10/09/2020",
    Account2: "09493103230",
    TypeOfMoney2: "Cash",
    Valid2: "10/09/2020",
    IssueDebitCard: "34455310049",
    OtherAutoPayment: "4G",
    UnAcceptable: "bad debt",
    Fax: "0298313313",
    Number: "34522333",
    PartnerName: "Nguyen Van A",
    IdenCard: "2345685678",
    DateOfIssue: "09/02/2010",
    PlaceOfIssue: "Ho Chi Minh",
    Author: "Nguyen Van C,"



  };
 
 
 
 





export default function CIF3() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    var url_string = window.location.href; 
      var url = new URL(url_string);
      var branch = url.searchParams.get("branch");
      var cifNumber = url.searchParams.get("cifNumber");
      var date = url.searchParams.get("date");
      var month = url.searchParams.get("month");
      var year = url.searchParams.get("year");
      var place = url.searchParams.get("place");
      var address = url.searchParams.get("address");
      var phone = url.searchParams.get("phone");
      var fax = url.searchParams.get("fax");
      var username = url.searchParams.get("username");
      var occupation= url.searchParams.get("occupation");
      var number = url.searchParams.get("number");
      var dateIssue = url.searchParams.get("dateIssue");
      var monthIssue = url.searchParams.get("monthIssue");
      var yearIssue = url.searchParams.get("yearIssue");
      var partner = url.searchParams.get("partner");
      var partnerAdd = url.searchParams.get("partnerAdd");
      var identity = url.searchParams.get("identity");
      var dateiden = url.searchParams.get("dateiden");
      var placeiden = url.searchParams.get("placeiden")



      setData({...data, Branch: branch, CifNumber: cifNumber, Date: date, Month: month, Year: year, Place: place, Address: address, Phone: phone, Fax: fax, UserName: username, Occupation: occupation, Number: number, DateIssue: dateIssue, MonthIssue: monthIssue, YearIssue: yearIssue, PartnerName: partner, PartnerAddress: partnerAdd, IdenCard: identity, DateOfIssue: dateiden, PlaceOfIssue: placeiden })
    return () => {
      
    }
  }, [])
  
  return (
    <Bound>
      <div id="main" className="fw clearfix" >
        {/* <div className="site-center"> */}
          <div id="page-container">
            <div id="pf1" className="pf w0 h0" >
              {/* data-page-no={1} */}
              <div className="pc pc1 w0 h0">
                <img alt="" src={logo} style={{width: "180px", height: "60px"}}/>
                <div className="c x1 y1 w2 h0">
                  
                  <div className="t m0 x3 h2 y3 ff1 fs0 fc0 sc0 ls0 ws0"> </div>
                  <div className="t m0 x3 h3 y4 ff2 fs1 fc0 sc0 ls0 ws0"> </div>
                </div>
                <div className="c x4 y5 w3 h4">
                  <div className="t m0 x5 h5 y6 ff2 fs0 fc0 sc0 ls0 ws0"> </div>
                  <div className="t m0 x6 h5 y7 ff3 fs5 fc0 sc0 ls0 ws0">
                    CHI NH
                    <span className="_ _0" />
                    ÁNH: <span className="url-parameter"><span className="url-container fs5 ff3"> {data.Branch}</span><span className="dot1"></span></span> ………………………
                    <span className="_ _0" />
                    ………………<span className="ff2"> </span>
                  </div>
                </div>
                <div className="c x7 y5 w4 h4">
                  <div className="t m0 x8 h6 y8 ff2 fs2 fc0 sc0 ls0 ws0"> </div>
                </div>
                <div className="c x1 y1 w2 h0">
                  <div className="t m0 x7 h7 y9 ff2 fs3 fc0 sc0 ls0 ws0"> </div>
                  <div className="t m0 x9 h7 ya ff4 fs4 fc0 sc0 ls0 ws0" style={{fontWeight: "bold"}}>
                    HỢP ĐỒNG PHÁT HÀNH VÀ SỬ DỤNG THẺ GHI NỢ
                    <span className="ff2"> </span>
                  </div>
                  <div className="t m0 xa h8 yb ff3 fs3 fc0 sc0 ls0 ws0">
                    Số:<span className="url-parameter"><span className="url-container ff3"> {data.CifNumber}</span><span className="dot1"></span></span>…....................…ngày<span className="url-parameter"><span className="url-container ff3"> {data.Date}</span><span className="dot1"></span></span>..…/<span className="url-parameter"><span className="url-container ff3"> {data.Month}</span><span className="dot1"></span></span>..…/<span className="url-parameter"><span className="url-container ff3"> {data.Year}</span><span className="dot1"></span></span>........
                    <span className="ff5"> </span>
                  </div>
                  <div className="t m0 x7 h8 yc ff5 fs3 fc0 sc0 ls0 ws0"> </div>
                  <div className="t m0 xb h8 yd ff3 fs3 fc0 sc0 ls0 ws0">
                    Căn cứ:<span className="ff5"> </span>
                  </div>
                  <div className="t m0 xb h8 ye ff3 fs3 fc0 sc0 ls0 ws0">
                    Bộ luật Dân sự hiện hành; <span className="ff5"> </span>
                  </div>
                  <div className="t m0 xb h8 yf ff3 fs3 fc0 sc0 ls0 ws0">
                    Luật các tổ chức tín dụng hiện hành;{" "}
                    <span className="ff5"> </span>
                  </div>
                  <div className="t m0 xb h8 y10 ff3 fs3 fc0 sc0 ls0 ws0">
                  Các quy định hiện hành của Ngân hàng Nhà nước Việt Nam và Agribank về phát hành, quản lý, sử dụng và 
                   
                  </div>
                  <div className="t m0 xb h8 y11 ff3 fs3 fc0 sc0 ls0 ws0">
                  thanh toán thẻ
                   
                  </div>
                 
                  <div className="t m0 xb h8 y12 ff3 fs3 fc0 sc0 ls0 ws0">
                    Nhu cầu và khả năng của hai bên.
                    <span className="ff5"> </span>
                  </div>
                  <div className="t m0 xb h8 y13 ff3 fs3 fc0 sc0 ls0 ws0">
                    Hôm nay, ngày<span className="url-parameter"><span className="url-container ff3"> {data.Date}</span><span className="dot1"></span></span>..…/<span className="url-parameter"><span className="url-container ff3"> {data.Month}</span><span className="dot1"></span></span>..…/<span className="url-parameter"><span className="url-container ff3"> {data.Year}</span><span className="dot1"></span></span>........, tại
                    <span className="ff2">
                      {" "}
                      <span className="_ _0" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.Place}</span><span className="dot1"></span></span>............................ <span className="_ _4" />{" "}
                    </span>
                  </div>
                  <div className="t m0 xb h8 y14 ff2 fs3 fc0 sc0 ls0 ws0">
                    {" "}
                    <span className="_ _5" />
                    ......................................................................................{" "}
                    <span className="_ _4" />{" "}
                  </div>
                  <div className="t m0 xb h8 y15 ff3 fs3 fc0 sc0 ls0 ws0">
                    Chúng tôi gồm có:<span className="ff5"> </span>
                  </div>
                  <div className="t m0 xb h8 y16 ff2 fs3 fc0 sc0 ls0 ws0">
                    Bên A:
                    <span className="ff2">
                      {" "}
                      Agribank Chi nhánh. <span className="_ _6" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.Branch}</span><span className="dot1"></span></span>.......................................{" "}
                      <span className="_ _4" />{" "}
                    </span>
                  </div>
                  <div className="t m0 xb h8 y17 ff3 fs3 fc0 sc0 ls0 ws0">
                    Đị<span className="ff2">a ch</span>ỉ
                    <span className="ff2 ls1">
                      :{" "}
                      <span className="ls0">
                        {" "}
                        <span className="_ _0" />
                        <span className="url-parameter"><span className="url-container ff3"> {data.Address}</span><span className="dot1"></span></span>........................................................................{" "}
                        <span className="_ _4" />{" "}
                      </span>
                    </span>
                  </div>
                  <div className="t m0 xb h8 y18 ff3 fs3 fc0 sc0 ls2 ws0">
                    Đi
                    <span className="ls0">
                      ệ<span className="ff2">n tho</span>ạ
                      <span className="ff2">
                        i:<span className="url-parameter"><span className="url-container ff3"> {data.Phone}</span><span className="dot1"></span></span>...................... Fax: <span className="_ _5" />
                        <span className="url-parameter"><span className="url-container ff3"> {data.Fax}</span><span className="dot1"></span></span>.....................................{" "}
                        <span className="_ _4" />{" "}
                      </span>
                    </span>
                  </div>
                  <div className="t m0 xb h8 y19 ff3 fs3 fc0 sc0 ls0 ws0">
                    Đạ<span className="ff2">i di</span>ệ
                    <span className="ff2">
                      n: Ông/Bà <span className="_ _7" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.UserName}</span><span className="dot1"></span></span>
                      ..........................................................{" "}
                      <span className="_ _4" />{" "}
                    </span>
                  </div>
                  <div className="t m0 xb h8 y1a ff2 fs3 fc0 sc0 ls3 ws0">
                    Ch
                    <span className="ff3 ls0">
                      ứ<span className="ff2">c v</span>ụ
                    </span>
                    <span className="ls1">
                      :{" "}
                      <span className="ls0">
                        {" "}
                        <span className="_ _0" />
                        <span className="url-parameter"><span className="url-container ff3"> {data.Occupation}</span><span className="dot1"></span></span>
                        ......................................................................{" "}
                        <span className="_ _4" />{" "}
                      </span>
                    </span>
                  </div>
                  <div className="t m0 xb h8 y1b ff2 fs3 fc0 sc0 ls0 ws0">
                    Quy<span className="ff3">ết đị</span>nh/Gi
                    <span className="ff3">ấ</span>y u
                    <span className="ff3">ỷ</span> quy
                    <span className="ff3">ề</span>n s
                    <span className="ff3">ố</span>{" "}
                    <span className="ls4">(n</span>
                    <span className="ff3">ế</span>u có):<span className="url-parameter"><span className="url-container ff3"> {data.Number}</span><span className="dot1"></span></span> .......................{" "}
                    <span className="ff3">ngày<span className="url-parameter"><span className="url-container ff3"> {data.Date}</span><span className="dot1"></span></span>..…/<span className="url-parameter"><span className="url-container ff3"> {data.Month}</span><span className="dot1"></span></span>..…/<span className="url-parameter"><span className="url-container ff3"> {data.Year}</span><span className="dot1"></span></span>............</span>
                    .do <span className="url-parameter"><span className="url-container ff3"> {data.Author}</span><span className="dot1"></span></span>........................................k
                    <span className="_ _2" />
                    ý.{" "}
                  </div>
                  <div className="t m0 xb h8 y1c ff2 fs3 fc0 sc0 ls0 ws0">
                    Bên B:{" "}
                    <span className="ff2">
                      Ông/Bà: <span className="_ _7" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.PartnerName}</span><span className="dot1"></span></span>
                      ............................................................{" "}
                      <span className="_ _4" />{" "}
                    </span>
                  </div>
                  <div className="t m0 xb h8 y1d ff3 fs3 fc0 sc0 ls0 ws0">
                    Địa chỉ thường trú:{" "}
                    <span className="ff2">
                      {" "}
                      <span className="_ _6" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.PartnerAddress}</span><span className="dot1"></span></span>
                      .......................................................{" "}
                      <span className="_ _5" />{" "}
                    </span>
                  </div>
                  <div className="t m0 xb h8 y1e ff3 fs3 fc0 sc0 ls0 ws0">
                    Số CMT/Hộ chiếu/Thẻ căn cước công dân:
                    <span className="ff3">
                      {" "}
                      <span className="_ _5" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.IdenCard}</span><span className="dot1"></span></span>................. <span className="_ _0" />{" "}
                    </span>
                  </div>
                  <div className="t m0 xb h8 y1f ff3 fs3 fc0 sc0 ls0 ws0">
                    Ngày cấp:<span className="url-parameter"><span title={data.DateOfIssue }className="url-date ff3 hidden-info"> {data.DateOfIssue}</span><span className="dot1"></span></span>................. Nơi cấp:
                    <span className="ff3">
                      {" "}
                      <span className="_ _8" />
                      <span className="url-parameter"><span className="url-container ff3"> {data.PlaceOfIssue}</span><span className="dot1"></span></span>...................... <span className="_ _4" />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="pi"
                data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
              />
            </div>
          </div>
        </div>
        {/* http://localhost:3000/?branch=Vo%20V%C4%83n%20T%E1%BA%A7n&cifNumber=3456543232&date=04&month=08&year=2020&place=Ho%20Chi%20Minh&address=63%20Vo%20Van%20Tan%20quan%203%20Tphcm&phone=098745687&fax=309445504&username=Hoang%20Van%20A&occupation=Manager&number=2132444332&dateIssue=24&monthIssue=09&yearIssue=2020&author=Nguyen%20Van%20O&partner=Nguyen%20Thu%20Thuy&partnerAdd=109%20Nguyen%20Thi%20Minh%20Khai%20phuong%203%20quan%203%20TPhcm&identity=292935456&dateiden=09/02/2013&placeiden=Ha%20Noi */}
    </Bound>
  );
}
