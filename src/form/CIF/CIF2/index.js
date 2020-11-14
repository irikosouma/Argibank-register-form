import React from 'react'
//styles
import {Bound} from './index.styles';
import "./css/fancy.min.css";
import './css/base.min.css';
import './css/main.css';
//image
import frame from '../../../assets/images/bg1.png'
const data = [
  {
    OtherCardNumber: "0239943123",
    RegisForInternet: "452342425",
    Notification: "SMS phone",
    MailAddress: "23 Avenue street, District 1, Ho Chi Minh city ",
    OtherNotification: "Cellphone",
    CellphoneOTP: "32423554354",
    ServiceUserName: "nguyen van d",
    ServiceuserCode: "9423434",
    Date: "09",
    Month: "03",
    Year: "2020",
    Place: "HCM",
    CifNumber: "309432434",
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
    


  }

]


export default function CIF2() {
  return (
    <Bound>
      {data.map((item,index) => {
    return (
      <div id="main" className="fw clearfix" key={index}>
        <div className="site-center">
           <div id="page-container">
            <div id="pf1" class="pf w0 h0" data-page-no="1">
              <div class="pc pc1 w0 h0">
                <img
                  class="bi x0 y0 w1 h1"
                  alt=""
                  src={frame}
                />
                <div class="t m0 x1 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">
                  V. <span class="ff2">Phần</span> cam{" "}
                  <span class="ff2">kết</span> <span class="ff2">của</span>{" "}
                  khách hàng.
                </div>
                <div class="c x2 y2 w2 h3">
                  <div class="t m0 x3 h2 y3 ff3 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    Tôi/Chúng <span class="_ _0"></span>tôi{" "}
                    <span class="_ _0"></span>cam <span class="_ _0"></span>
                    <span class="ff4">kết</span> <span class="_ _0"></span>
                    <span class="ff4">những</span> <span class="_ _0"></span>
                    thông <span class="_ _0"></span>tin{" "}
                    <span class="_ _0"></span>trên <span class="_ _0"></span>
                    <span class="ff4">đây</span> <span class="_ _0"></span>là{" "}
                    <span class="_ _0"></span>
                    <span class="ff4">đúng</span> <span class="_ _0"></span>
                    <span class="ff4">sự</span> <span class="_ _0"></span>
                    <span class="ff4">thật</span> <span class="_ _0"></span>và{" "}
                    <span class="_ _0"></span>hoàn <span class="_ _0"></span>
                    toàn{" "}
                  </div>
                  <div class="t m0 x3 h2 y4 ff4 fs0 fc0 sc0 ls0 ws0">
                    chịu
                    <span class="ff3">
                      {" "}
                      <span class="_ _0"></span>trách <span class="_ _1"></span>
                    </span>
                    nhiệm
                    <span class="ff3">
                      {" "}
                      <span class="_ _0"></span>
                    </span>
                    về
                    <span class="ff3">
                      {" "}
                      <span class="_ _1"></span>các <span class="_ _0"></span>
                      thông <span class="_ _1"></span>tin{" "}
                      <span class="_ _0"></span>
                    </span>
                    đã
                    <span class="ff3">
                      {" "}
                      <span class="_ _1"></span>cung <span class="_ _0"></span>
                    </span>
                    cấp.
                    <span class="ff3">
                      {" "}
                      <span class="_ _1"></span>Tôi/Chúng{" "}
                      <span class="_ _0"></span>tôi <span class="_ _1"></span>
                    </span>
                    đã
                    <span class="ff3">
                      {" "}
                      <span class="_ _0"></span>
                    </span>
                    đọc,
                    <span class="ff3">
                      {" "}
                      <span class="_ _1"></span>
                    </span>
                    hiểu
                    <span class="ff3">
                      {" "}
                      <span class="_ _0"></span>rõ <span class="_ _1"></span>và{" "}
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y5 ff4 fs0 fc0 sc0 ls0 ws0">
                    đồng
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>ý <span class="_ _2"> </span>
                    </span>
                    với
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>
                    </span>
                    nội
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>dung{" "}
                      <span class="_ _2"> </span>
                    </span>
                    thỏa
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>
                    </span>
                    thuận
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>
                    </span>
                    về
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>
                    </span>
                    mở
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>và <span class="_ _2"> </span>
                    </span>
                    sử
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>
                    </span>
                    dụng
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>tài <span class="_ _2"> </span>
                    </span>
                    khoản
                    <span class="ff3">
                      {" "}
                      <span class="_ _2"> </span>thanh{" "}
                      <span class="_ _2"> </span>toán{" "}
                      <span class="_ _2"> </span>
                    </span>
                    tại<span class="ff3"> </span>
                  </div>
                  <div class="t m0 x3 h2 y6 ff3 fs0 fc0 sc0 ls0 ws0">
                    Agribank <span class="_ _0"></span>kèm{" "}
                    <span class="_ _1"></span>theo, <span class="_ _0"></span>
                    cam <span class="_ _0"></span>
                    <span class="ff4">kết</span> <span class="_ _1"></span>
                    <span class="ff4">chấp</span> <span class="_ _0"></span>
                    <span class="ff4">thuận</span> <span class="_ _1"></span>và{" "}
                    <span class="_ _0"></span>
                    <span class="ff4">chịu</span> <span class="_ _0"></span>
                    trách <span class="_ _1"></span>
                    <span class="ff4">nhiệm</span> <span class="_ _0"></span>
                    <span class="ff4">quản</span> <span class="_ _1"></span>lý{" "}
                    <span class="_ _0"></span>và <span class="_ _1"></span>
                    <span class="ff4">sử</span> <span class="_ _0"></span>
                    <span class="ff4">dụng</span>{" "}
                  </div>
                  <div class="t m0 x3 h2 y7 ff3 fs0 fc0 sc0 ls0 ws0">
                    TKTT, <span class="_ _2"> </span>các{" "}
                    <span class="_ _2"> </span>
                    <span class="ff4">dịch</span> <span class="_ _2"> </span>
                    <span class="ff4">vụ</span> <span class="_ _2"> </span>ngân{" "}
                    <span class="_ _2"> </span>hàng <span class="ff4">đã</span>{" "}
                    <span class="_ _2"> </span>
                    <span class="ff4">đăng</span> <span class="_ _2"> </span>ký{" "}
                    <span class="_ _2"> </span>theo <span class="_ _2"> </span>
                    các <span class="_ _2"> </span>quy{" "}
                    <span class="_ _2"> </span>
                    <span class="ff4">định</span> <span class="_ _2"> </span>
                    <span class="ff4">của</span> <span class="_ _2"> </span>
                    Agribank,{" "}
                  </div>
                  <div class="t m0 x3 h2 y8 ff3 fs0 fc0 sc0 ls0 ws0">
                    NHNN <span class="_ _1"></span>và <span class="_ _1"></span>
                    pháp <span class="_ _1"></span>
                    <span class="ff4">luật</span> <span class="_ _1"></span>
                    <span class="ff4">của</span> <span class="_ _0"></span>
                    <span class="ff4">nước</span> <span class="_ _1"></span>
                    CHXHCN <span class="_ _1"></span>
                    <span class="ff4">Việt</span> <span class="_ _1"></span>Nam.{" "}
                    <span class="_ _1"></span>Tôi <span class="_ _1"></span>
                    <span class="ff4">hiểu</span> <span class="_ _1"></span>
                    <span class="ff4">rằng</span> <span class="_ _1"></span>các{" "}
                    <span class="_ _1"></span>quy <span class="_ _1"></span>
                    <span class="ff4">định</span>{" "}
                  </div>
                  <div class="t m0 x3 h2 y9 ff3 fs0 fc0 sc0 ls0 ws0">
                    này <span class="_ _3"></span>có <span class="_ _3"></span>
                    <span class="ff4">thể</span> <span class="_ _3"></span>
                    <span class="ff4">được</span> <span class="_ _3"></span>
                    <span class="ff4">sửa</span> <span class="_ _3"></span>
                    <span class="ff4">đổi</span> <span class="_ _3"></span>theo{" "}
                    <span class="_ _3"></span>
                    <span class="ff4">từng</span> <span class="_ _3"></span>
                    <span class="ff4">thời</span> <span class="_ _3"></span>
                    <span class="ff4">kỳ,</span> <span class="_ _3"></span>theo{" "}
                    <span class="_ _3"></span>
                    <span class="ff4">đó</span> <span class="_ _3"></span>các{" "}
                    <span class="_ _3"></span>quy <span class="_ _3"></span>
                    <span class="ff4">định</span> <span class="_ _3"></span>
                    <span class="ff4">sẽ</span> <span class="_ _3"></span>
                    <span class="ff4">điều</span> <span class="_ _3"></span>
                    <span class="ff4">chỉnh</span>{" "}
                  </div>
                  <div class="t m0 x3 h2 ya ff3 fs0 fc0 sc0 ls0 ws0">
                    quan <span class="ff4">hệ</span> tài{" "}
                    <span class="ff4">khoản</span> và{" "}
                    <span class="ff4">sử</span> <span class="ff4">dụng</span>{" "}
                    <span class="ff4">dịch</span> <span class="ff4">vụ</span>{" "}
                    <span class="ff4">của</span> tôi và{" "}
                    <span class="ff4">đồng</span> ý tuân{" "}
                    <span class="ff4">thủ</span> các quy{" "}
                    <span class="ff4">định</span>{" "}
                    <span class="ff4">
                      đó.<span class="ff1"> </span>
                    </span>
                  </div>
                </div>
                <div class="c x4 y2 w3 h3">
                  <div class="t m0 x5 h2 yb ff5 fs0 fc0 sc0 ls0 ws0"><span className="url-parameter hidden-info"><span className="url-container hidden-info ff4"> {item.Place}</span><span className="dot1"></span></span>
                    ………<span class="ff4">,ngày <span className="url-parameter"><span className="url-container ff4"> {item.Date}</span><span className="dot1"></span></span>…...tháng<span className="url-parameter"><span className="url-container ff4"> {item.Month}</span><span className="dot1"></span></span>……năm</span><span className="url-parameter"><span className="url-container ff4"> {item.Year}</span><span className="dot1"></span></span>……
                  </div>
                  <div class="t m0 x6 h2 yc ff2 fs0 fc0 sc0 ls0 ws0">
                    Chủ<span class="ff1"> tài </span>khoản
                  </div>
                  <div class="t m0 x7 h4 yd ff5 fs1 fc0 sc0 ls0 ws0">
                    {" "}
                    (Ký,ghi rõ <span class="ff6">họ</span> tên)
                  </div>
                </div>
                <div class="c x8 ye w4 h5">
                  <div class="t m0 x3 h2 yf ff2 fs0 fc0 sc0 ls0 ws0">
                    Loại<span class="ff1"> </span>thẻ
                    <span class="ff3">
                      : <span class="ff7 fs1"></span> Ghi{" "}
                      <span class="ff4">nợ</span> <span class="ff4">nội</span>{" "}
                      <span class="ff4">địa</span>{" "}
                      <span class="ff7 fs1"></span>{" "}
                      <span class="ff4">Lập</span>{" "}
                      <span class="ff4">nghiệp</span>{" "}
                      <span class="ff7 fs1">
                        <span class="ff3"> </span>
                      </span>
                      JCB Debit<span class="fs1"> </span>{" "}
                      <span class="ff7 fs1"></span>{" "}
                      <span class="ff4">Thẻ</span> liên{" "}
                      <span class="ff4">kết</span>{" "}
                      <span class="ff4">thương</span>{" "}
                      <span class="ff4">hiệu</span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y10 ff3 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    <span class="ff7 fs1" style={{paddingLeft: 158}}></span> Visa Debit{" "}
                    <span class="ff7 fs1"></span> MasterCard Debit{" "}
                    <span class="ff7 fs1">
                      <span class="ff3"> </span>
                    </span>
                    <span class="ff4">Thẻ</span> khác  <span className="url-parameter"><span className="url-container"> {item.OtherCardNumber}</span><span className="dot1"></span></span>………….......
                  </div>
                  <div class="t m0 x3 h2 y11 ff2 fs0 fc0 sc0 ls0 ws0">
                    Hạng<span class="ff1"> </span>thẻ
                    <span class="ff5">
                      :
                      <span class="ff3">
                        {" "}
                        <span class="ff7 fs1"></span>{" "}
                        <span class="ff4">Chuẩn</span>{" "}
                        <span class="ff7 fs1"></span> Vàng{" "}
                        <span class="ff1"> Hình </span>
                      </span>
                    </span>
                    thức
                    <span class="ff1">
                      {" "}
                      phát hành
                      <span class="ff3">
                        : <span class="ff7 fs1"></span> Phát hành{" "}
                        <span class="ff4">thường</span>{" "}
                        <span class="ff7 fs1"></span> Phát hành nhanh{" "}
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h6 y12 ff3 fs0 fc0 sc0 ls0 ws0">
                    T<span class="_ _4"></span>ê<span class="_ _4"></span>n
                    <span class="_ _4"></span> t<span class="_ _4"></span>r
                    <span class="_ _4"></span>ê<span class="_ _4"></span>n
                    <span class="_ _4"></span> t<span class="_ _4"></span>h
                    <span class="_ _4"></span>
                    <span class="ff4">
                      ẻ<span class="_ _4"></span>
                      <span class="ff3">
                        {" "}
                        (<span class="_ _4"></span>c<span class="_ _4"></span>h
                        <span class="_ _4"></span>
                        <span class="ff4">
                          ữ<span class="_ _4"></span>
                          <span class="ff3">
                            {" "}
                            i<span class="_ _4"></span>n
                            <span class="_ _4"></span> h
                            <span class="_ _4"></span>o
                            <span class="_ _4"></span>a
                            <span class="_ _4"></span>{" "}
                            <span class="_ _4"></span>k
                            <span class="_ _4"></span>hô
                            <span class="_ _4"></span>n
                            <span class="_ _4"></span>g
                            <span class="_ _4"></span>{" "}
                            <span class="_ _4"></span>d
                            <span class="_ _4"></span>
                            <span class="ff4">
                              ấ<span class="_ _4"></span>
                              <span class="ff3">
                                u<span class="_ _4"></span>,
                                <span class="_ _4"></span> t
                                <span class="_ _4"></span>
                                <span class="ff4">
                                  ố<span class="_ _4"></span>
                                  <span class="ff3">
                                    i<span class="_ _4"></span>{" "}
                                    <span class="ff4">
                                      đ<span class="_ _4"></span>
                                      <span class="ff3">
                                        a<span class="_ _4"></span> 2
                                        <span class="_ _4"></span>6
                                        <span class="_ _4"></span> k
                                        <span class="_ _4"></span>ý
                                        <span class="_ _4"></span> t
                                        <span class="_ _4"></span>
                                        <span class="ff4">
                                          ự<span class="_ _4"></span>
                                          <span class="ff3">
                                            )<span class="_ _4"></span>:
                                            <span class="_ _4"></span>{" "}
                                            <span class="_ _4"></span>
                                            <span class="ff7 fs2">
                                              <span class="_ _5"></span>
                                              <span class="ff3">
                                                {" "}
                                                <span class="_ _6"></span>
                                                <span class="ff7">
                                                  <span class="_ _5"></span>
                                                  <span class="ff3">
                                                    {" "}
                                                    <span class="_ _5"></span>
                                                    <span class="ff7">
                                                      
                                                      <span class="_ _5"></span>
                                                      <span class="ff3">
                                                        {" "}
                                                        <span class="_ _6"></span>
                                                        <span class="ff7">
                                                          
                                                          <span class="_ _5"></span>
                                                          <span class="ff3">
                                                            {" "}
                                                            <span class="_ _6"></span>
                                                            <span class="ff7">
                                                              
                                                              <span class="_ _5"></span>
                                                              <span class="ff3">
                                                                {" "}
                                                                <span class="_ _6"></span>
                                                                <span class="ff7">
                                                                  
                                                                  <span class="_ _5"></span>
                                                                  <span class="ff3">
                                                                    {" "}
                                                                    <span class="_ _5"></span>
                                                                    <span class="ff7">
                                                                      
                                                                      <span class="_ _5"></span>
                                                                      <span class="ff3">
                                                                        {" "}
                                                                        <span class="_ _6"></span>
                                                                        <span class="ff7">
                                                                          
                                                                          <span class="_ _5"></span>
                                                                          <span class="ff3">
                                                                            {" "}
                                                                            <span class="_ _6"></span>
                                                                            <span class="ff7">
                                                                              
                                                                              <span class="_ _5"></span>
                                                                              <span class="ff3">
                                                                                {" "}
                                                                                <span class="_ _6"></span>
                                                                                <span class="ff7">
                                                                                  
                                                                                  <span class="_ _5"></span>
                                                                                  <span class="ff3">
                                                                                    {" "}
                                                                                    <span class="_ _5"></span>
                                                                                    <span class="ff7">
                                                                                      
                                                                                      <span class="_ _5"></span>
                                                                                      <span class="ff3">
                                                                                        {" "}
                                                                                        <span class="_ _6"></span>
                                                                                        <span class="ff7">
                                                                                          
                                                                                          <span class="_ _5"></span>
                                                                                          <span class="ff3">
                                                                                            {" "}
                                                                                            <span class="_ _6"></span>
                                                                                            <span class="ff7">
                                                                                              
                                                                                              <span class="_ _5"></span>
                                                                                              <span class="ff3">
                                                                                                {" "}
                                                                                                <span class="_ _6"></span>
                                                                                                <span class="ff7">
                                                                                                  
                                                                                                  <span class="_ _5"></span>
                                                                                                  <span class="ff3">
                                                                                                    {" "}
                                                                                                    <span class="_ _5"></span>
                                                                                                    <span class="ff7">
                                                                                                      
                                                                                                      <span class="_ _5"></span>
                                                                                                      <span class="ff3">
                                                                                                        {" "}
                                                                                                        <span class="_ _6"></span>
                                                                                                        <span class="ff7">
                                                                                                          
                                                                                                          <span class="_ _5"></span>
                                                                                                          <span class="ff3">
                                                                                                            {" "}
                                                                                                            <span class="_ _6"></span>
                                                                                                            <span class="ff7">
                                                                                                              
                                                                                                              <span class="_ _5"></span>
                                                                                                              <span class="ff3">
                                                                                                                {" "}
                                                                                                                <span class="_ _6"></span>
                                                                                                                <span class="ff7">
                                                                                                                  
                                                                                                                  <span class="_ _5"></span>
                                                                                                                  <span class="ff3">
                                                                                                                    {" "}
                                                                                                                    <span class="_ _5"></span>
                                                                                                                    <span class="ff7">
                                                                                                                      
                                                                                                                      <span class="_ _5"></span>
                                                                                                                      <span class="ff3">
                                                                                                                        {" "}
                                                                                                                        <span class="_ _6"></span>
                                                                                                                        <span class="ff7">
                                                                                                                          
                                                                                                                          <span class="_ _5"></span>
                                                                                                                          <span class="ff3">
                                                                                                                            {" "}
                                                                                                                            <span class="_ _6"></span>
                                                                                                                            <span class="ff7">
                                                                                                                              
                                                                                                                              <span class="_ _5"></span>
                                                                                                                              <span class="ff3">
                                                                                                                                {" "}
                                                                                                                                <span class="_ _6"></span>
                                                                                                                                <span class="ff7">
                                                                                                                                  
                                                                                                                                  <span class="_ _5"></span>
                                                                                                                                  <span class="ff3">
                                                                                                                                    {" "}
                                                                                                                                    <span class="_ _5"></span>
                                                                                                                                    <span class="ff7">
                                                                                                                                      
                                                                                                                                      <span class="_ _5"></span>
                                                                                                                                      <span class="ff3">
                                                                                                                                        {" "}
                                                                                                                                        <span class="_ _6"></span>
                                                                                                                                        <span class="ff7">
                                                                                                                                          
                                                                                                                                          <span class="_ _5"></span>
                                                                                                                                          <span class="ff3">
                                                                                                                                            {" "}
                                                                                                                                            <span class="_ _6"></span>
                                                                                                                                            <span class="ff7">
                                                                                                                                              
                                                                                                                                              <span class="_ _5"></span>
                                                                                                                                              <span class="ff3">
                                                                                                                                                {" "}
                                                                                                                                                <span class="_ _6"></span>
                                                                                                                                                <span class="ff7">
                                                                                                                                                  
                                                                                                                                                  <span class="_ _5"></span>
                                                                                                                                                  <span class="ff3 fs1">
                                                                                                                                                    {" "}
                                                                                                                                                    <span class="_ _4"></span>{" "}
                                                                                                                                                  </span>
                                                                                                                                                </span>
                                                                                                                                              </span>
                                                                                                                                            </span>
                                                                                                                                          </span>
                                                                                                                                        </span>
                                                                                                                                      </span>
                                                                                                                                    </span>
                                                                                                                                  </span>
                                                                                                                                </span>
                                                                                                                              </span>
                                                                                                                            </span>
                                                                                                                          </span>
                                                                                                                        </span>
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                  </span>
                                                                                                                </span>
                                                                                                              </span>
                                                                                                            </span>
                                                                                                          </span>
                                                                                                        </span>
                                                                                                      </span>
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                              </span>
                                                                                            </span>
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y13 ff1 fs0 fc0 sc0 ls0 ws0">
                    Hình <span class="ff2">thức</span>{" "}
                    <span class="ff2">nhậnThẻ</span> :{" "}
                    <span class="ff7">
                      
                      <span class="ff3">
                        {" "}
                        <span class="ff4">Tại</span> ngân hàng{" "}
                      </span>
                      
                      <span class="ff3">
                        {" "}
                        <span class="ff4">Địa</span>{" "}
                        <span class="ff4">chỉ</span>{" "}
                        <span class="ff4">hiện</span>{" "}
                        <span class="ff4">tại</span>{" "}
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y14 ff7 fs0 fc0 sc0 ls0 ws0">
                    
                    <span class="ff3">
                      {" "}
                      <span class="ff2">
                        Đăng<span class="ff1"> ký </span>bảo
                        <span class="ff1"> </span>hiểm<span class="ff1"> </span>
                        chủ<span class="ff1"> </span>thẻ
                      </span>{" "}
                      <span class="ff4">(thẻ</span> ghi{" "}
                      <span class="ff4">nợ</span> <span class="ff4">nội</span>{" "}
                      <span class="ff4">địa)</span> theo{" "}
                      <span class="ff4">nội</span> dung,{" "}
                      <span class="ff4">điều</span>{" "}
                      <span class="ff4">khoản</span>{" "}
                      <span class="ff4">bảo</span> <span class="ff4">hiểm</span>{" "}
                      <span class="ff4">hiện</span> hành{" "}
                      <span class="ff4">của</span> ABIC
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y15 ff7 fs0 fc0 sc0 ls0 ws0">
                    
                    <span class="ff3">
                      {" "}
                      <span class="ff2">
                        Đăng
                        <span class="ff1">
                          {" "}
                          ký Internet : <span class="ff4">Hạn</span>
                        </span>
                      </span>{" "}
                      <span class="ff4">mức</span> GD{" "}
                      <span class="ff4">(VNĐ/ngày,</span>{" "}
                      <span class="ff5">
                        áp <span class="ff6">dụng</span>{" "}
                        <span class="ff6">với</span>{" "}
                        <span class="ff6">thẻ</span> ghi{" "}
                        <span class="ff6">nợ</span>{" "}
                        <span class="ff6">quốc</span>{" "}
                        <span class="ff6">tế</span>
                      </span>
                      )
                      <span class="fs3">
                      <span className="url-parameter"><span className="url-container"> {item.RegisForInternet}</span><span className="dot1"></span></span>.........................................................................
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y16 ff4 fs0 fc0 sc0 ls0 ws0">
                    Số<span class="ff3"> </span>ĐT/email
                    <span class="ff3"> </span>nhận
                    <span class="ff3">
                      {" "}
                      OTP
                      <span class="fs3">:
                      <span className="url-parameter"><span className="url-container"> {item.CellphoneOTP}</span><span className="dot1"></span></span>
                        ............................................................................................................................................................................................
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y17 ff1 fs0 fc0 sc0 ls0 ws0">
                    6. Hình <span class="ff2">thức</span>{" "}
                    <span class="ff2">nhận</span> thông báo{" "}
                    <span class="ff2">số</span> <span class="ff2">dư</span> và
                    sao kê TKTT:{" "}
                    <span class="ff3">
                      {" "}
                      <span class="ff4">
                        Định
                      </span> <span class="ff4">kỳ</span>{" "}
                      <span class="ff4">gửi</span> : <span className="url-parameter"><span className="url-container"> {item.Notification}</span><span className="dot1"></span></span>…………………………………...…………………
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y18 ff7 fs1 fc0 sc0 ls0 ws0">
                    
                    <span class="ff3 fs0">
                      {" "}
                      <span class="ff4">
                        Tại
                      </span> <span class="ff4">quầy</span>{" "}
                    </span>
                    
                    <span class="ff3 fs0">
                      {" "}
                      <span class="ff4">
                        Thư
                      </span> <span class="ff4">(địa</span>{" "}
                      <span class="ff4">chỉ</span><span className="url-parameter"><span title={item.MailAddress} className="url-container hidden-content"> {item.MailAddress}</span><span className="dot1"></span></span>
                      ............................................................................)
                    </span>
                    
                    <span class="ff3">
                      {" "}
                      <span class="fs0">Fax </span>
                    </span>
                    
                    <span class="ff3">
                      {" "}
                      <span class="fs0">Khác…………</span>
                    </span>
                  </div>
                </div>
                <div class="c x8 y19 w5 h7">
                  <div class="t m0 x9 h2 y1a ff1 fs0 fc0 sc0 ls0 ws0">
                    I.<span class="_ _7"> </span>
                    <span class="ff2">Đăng</span> ký thông tin khách hàng cho{" "}
                    <span class="ff2">mục</span> <span class="ff2">đích</span>{" "}
                    tuân <span class="ff2">thủ</span> FATCA
                  </div>
                </div>
                <div class="c x8 y1b w4 h8">
                  <div class="t m0 x3 h2 y1c ff7 fs0 fc0 sc0 ls0 ws0">
                    
                    <span class="ff3">
                      {" "}
                      T<span class="_ _4"></span>ô<span class="_ _4"></span>i
                      <span class="_ _8"></span> <span class="_ _8"></span>l
                      <span class="_ _4"></span>à<span class="_ _4"></span>{" "}
                      <span class="_ _8"></span>c<span class="_ _4"></span>ô
                      <span class="_ _4"></span>n<span class="_ _8"></span>g
                      <span class="_ _4"></span> <span class="_ _4"></span>d
                      <span class="_ _8"></span>â<span class="_ _4"></span>n
                      <span class="_ _4"></span> <span class="_ _8"></span>M
                      <span class="_ _4"></span>
                      <span class="ff4">
                        ỹ<span class="_ _4"></span>
                        <span class="ff3">
                          {" "}
                          <span class="_ _8"></span>h<span class="_ _4"></span>o
                          <span class="_ _4"></span>
                          <span class="ff4">
                            ặ<span class="_ _8"></span>
                            <span class="ff3">
                              c<span class="_ _4"></span>{" "}
                              <span class="_ _4"></span>
                              <span class="ff4">
                                đ<span class="_ _8"></span>ố
                                <span class="_ _4"></span>
                                <span class="ff3">
                                  i<span class="_ _4"></span>{" "}
                                  <span class="_ _8"></span>t
                                  <span class="_ _4"></span>
                                  <span class="ff4">
                                    ư<span class="_ _4"></span>ợ
                                    <span class="_ _8"></span>
                                    <span class="ff3">
                                      n<span class="_ _4"></span>g
                                      <span class="_ _4"></span>{" "}
                                      <span class="_ _4"></span>c
                                      <span class="_ _8"></span>
                                      <span class="ff4">
                                        ư<span class="_ _4"></span>
                                        <span class="ff3">
                                          {" "}
                                          <span class="_ _4"></span>t
                                          <span class="_ _8"></span>r
                                          <span class="_ _4"></span>ú
                                          <span class="_ _4"></span>{" "}
                                          <span class="_ _8"></span>M
                                          <span class="_ _4"></span>
                                          <span class="ff4">
                                            ỹ<span class="_ _4"></span>
                                            <span class="ff3">
                                              {" "}
                                              <span class="_ _8"></span>
                                              <span class="ff1">
                                                (<span class="_ _4"></span>C
                                                <span class="_ _4"></span>
                                                <span class="ff2">
                                                  ầ<span class="_ _8"></span>
                                                  <span class="ff1">
                                                    n<span class="_ _4"></span>{" "}
                                                    <span class="_ _4"></span>
                                                    <span class="ff2">
                                                      đ
                                                      <span class="_ _8"></span>
                                                      <span class="ff1">
                                                        i
                                                        <span class="_ _4"></span>
                                                        <span class="ff2">
                                                          ề
                                                          <span class="_ _4"></span>
                                                          <span class="ff1">
                                                            n
                                                            <span class="_ _8"></span>{" "}
                                                            <span class="_ _4"></span>
                                                            m
                                                            <span class="_ _4"></span>
                                                            <span class="ff2">
                                                              ẫ
                                                              <span class="_ _8"></span>
                                                              <span class="ff1">
                                                                u
                                                                <span class="_ _4"></span>{" "}
                                                                <span class="_ _4"></span>
                                                                W
                                                                <span class="_ _8"></span>
                                                                -
                                                                <span class="_ _4"></span>
                                                                9
                                                                <span class="_ _4"></span>
                                                                ,
                                                                <span class="_ _8"></span>{" "}
                                                                <span class="_ _4"></span>
                                                                y
                                                                <span class="_ _4"></span>
                                                                ê
                                                                <span class="_ _8"></span>
                                                                u
                                                                <span class="_ _4"></span>{" "}
                                                                <span class="_ _4"></span>
                                                                c
                                                                <span class="_ _8"></span>
                                                                <span class="ff2">
                                                                  ầ
                                                                  <span class="_ _4"></span>
                                                                  <span class="ff1">
                                                                    u
                                                                    <span class="_ _4"></span>{" "}
                                                                    <span class="_ _8"></span>
                                                                    M
                                                                    <span class="_ _4"></span>
                                                                    ã
                                                                    <span class="_ _4"></span>{" "}
                                                                    <span class="_ _4"></span>
                                                                    s
                                                                    <span class="_ _8"></span>
                                                                    <span class="ff2">
                                                                      ố
                                                                      <span class="_ _4"></span>
                                                                      <span class="ff1">
                                                                        {" "}
                                                                        <span class="_ _4"></span>
                                                                        t
                                                                        <span class="_ _8"></span>
                                                                        h
                                                                        <span class="_ _4"></span>
                                                                        u
                                                                        <span class="_ _4"></span>
                                                                        <span class="ff2">
                                                                          ế
                                                                          <span class="_ _8"></span>
                                                                          <span class="ff1">
                                                                            {" "}
                                                                            <span class="_ _4"></span>
                                                                            v
                                                                            <span class="_ _4"></span>
                                                                            à
                                                                            <span class="_ _8"></span>{" "}
                                                                            <span class="_ _4"></span>
                                                                            c
                                                                            <span class="_ _4"></span>
                                                                            h
                                                                            <span class="_ _8"></span>
                                                                            <span class="ff2">
                                                                              ứ
                                                                              <span class="_ _4"></span>
                                                                              <span class="ff1">
                                                                                n
                                                                                <span class="_ _4"></span>
                                                                                g
                                                                                <span class="_ _8"></span>{" "}
                                                                                <span class="_ _4"></span>
                                                                                t
                                                                                <span class="_ _4"></span>
                                                                                <span class="ff2">
                                                                                  ừ
                                                                                  <span class="_ _8"></span>
                                                                                  <span class="ff1">
                                                                                    {" "}
                                                                                    <span class="_ _4"></span>
                                                                                    l
                                                                                    <span class="_ _4"></span>
                                                                                    i
                                                                                    <span class="_ _8"></span>
                                                                                    ê
                                                                                    <span class="_ _4"></span>
                                                                                    n
                                                                                    <span class="_ _4"></span>{" "}
                                                                                    <span class="_ _8"></span>
                                                                                    q
                                                                                    <span class="_ _4"></span>
                                                                                    u
                                                                                    <span class="_ _4"></span>
                                                                                    a
                                                                                    <span class="_ _8"></span>
                                                                                    n
                                                                                    <span class="_ _4"></span>
                                                                                    )
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y1d ff7 fs0 fc0 sc0 ls0 ws0">
                    
                    <span class="ff3">
                      {" "}
                      T<span class="_ _8"></span>ô<span class="_ _8"></span>i
                      <span class="_ _4"></span> <span class="_ _8"></span>k
                      <span class="_ _8"></span>h<span class="_ _4"></span>ô
                      <span class="_ _8"></span>n<span class="_ _8"></span>g
                      <span class="_ _4"></span> <span class="_ _8"></span>p
                      <span class="_ _8"></span>h<span class="_ _4"></span>
                      <span class="ff4">
                        ả<span class="_ _8"></span>
                        <span class="ff3">
                          i<span class="_ _8"></span> <span class="_ _8"></span>
                          l<span class="_ _4"></span>à<span class="_ _8"></span>{" "}
                          <span class="_ _8"></span>c<span class="_ _4"></span>ô
                          <span class="_ _8"></span>n<span class="_ _8"></span>g
                          <span class="_ _4"></span> <span class="_ _8"></span>d
                          <span class="_ _8"></span>â<span class="_ _4"></span>n
                          <span class="_ _8"></span> <span class="_ _8"></span>M
                          <span class="_ _4"></span>
                          <span class="ff4">
                            ỹ<span class="_ _8"></span>
                            <span class="ff3">
                              {" "}
                              <span class="_ _8"></span>h
                              <span class="_ _4"></span>o
                              <span class="_ _8"></span>
                              <span class="ff4">
                                ặ<span class="_ _8"></span>
                                <span class="ff3">
                                  c<span class="_ _4"></span>{" "}
                                  <span class="_ _8"></span>
                                  <span class="ff4">
                                    đ<span class="_ _8"></span>ố
                                    <span class="_ _4"></span>
                                    <span class="ff3">
                                      i<span class="_ _8"></span>{" "}
                                      <span class="_ _8"></span>t
                                      <span class="_ _4"></span>
                                      <span class="ff4">
                                        ư<span class="_ _8"></span>ợ
                                        <span class="_ _8"></span>
                                        <span class="ff3">
                                          n<span class="_ _4"></span>g
                                          <span class="_ _8"></span>{" "}
                                          <span class="_ _8"></span>c
                                          <span class="_ _4"></span>
                                          <span class="ff4">
                                            ư<span class="_ _8"></span>
                                            <span class="ff3">
                                              {" "}
                                              <span class="_ _8"></span>t
                                              <span class="_ _8"></span>r
                                              <span class="_ _4"></span>ú
                                              <span class="_ _8"></span>{" "}
                                              <span class="_ _8"></span>M
                                              <span class="_ _4"></span>
                                              <span class="ff4">
                                                ỹ<span class="_ _8"></span>
                                                <span class="ff3">
                                                  {" "}
                                                  <span class="_ _8"></span>n
                                                  <span class="_ _4"></span>h
                                                  <span class="_ _8"></span>
                                                  <span class="ff4">
                                                    ư<span class="_ _8"></span>
                                                    <span class="ff3">
                                                      n
                                                      <span class="_ _4"></span>
                                                      g
                                                      <span class="_ _8"></span>{" "}
                                                      <span class="_ _8"></span>
                                                      c
                                                      <span class="_ _4"></span>
                                                      ó
                                                      <span class="_ _8"></span>{" "}
                                                      <span class="_ _8"></span>
                                                      1
                                                      <span class="_ _4"></span>{" "}
                                                      <span class="_ _8"></span>
                                                      t
                                                      <span class="_ _8"></span>
                                                      r
                                                      <span class="_ _4"></span>
                                                      o
                                                      <span class="_ _8"></span>
                                                      n
                                                      <span class="_ _8"></span>
                                                      g
                                                      <span class="_ _4"></span>{" "}
                                                      <span class="_ _8"></span>
                                                      n
                                                      <span class="_ _8"></span>
                                                      h
                                                      <span class="_ _4"></span>
                                                      <span class="ff4">
                                                        ữ
                                                        <span class="_ _8"></span>
                                                        <span class="ff3">
                                                          n
                                                          <span class="_ _8"></span>
                                                          g
                                                          <span class="_ _4"></span>{" "}
                                                          <span class="_ _8"></span>
                                                          d
                                                          <span class="_ _8"></span>
                                                          <span class="ff4">
                                                            ấ
                                                            <span class="_ _4"></span>
                                                            <span class="ff3">
                                                              u
                                                              <span class="_ _8"></span>{" "}
                                                              <span class="_ _8"></span>
                                                              h
                                                              <span class="_ _4"></span>
                                                              i
                                                              <span class="_ _8"></span>
                                                              <span class="ff4">
                                                                ệ
                                                                <span class="_ _8"></span>
                                                                <span class="ff3">
                                                                  u
                                                                  <span class="_ _8"></span>{" "}
                                                                  <span class="_ _4"></span>
                                                                  M
                                                                  <span class="_ _8"></span>
                                                                  <span class="ff4">
                                                                    ỹ
                                                                    <span class="_ _8"></span>
                                                                    <span class="ff3">
                                                                      {" "}
                                                                      <span class="_ _4"></span>
                                                                      n
                                                                      <span class="_ _8"></span>
                                                                      h
                                                                      <span class="_ _8"></span>
                                                                      <span class="ff4">
                                                                        ư
                                                                        <span class="_ _4"></span>
                                                                        <span class="ff3">
                                                                          {" "}
                                                                          <span class="_ _8"></span>{" "}
                                                                          <span class="_ _8"></span>
                                                                          s
                                                                          <span class="_ _4"></span>
                                                                          a
                                                                          <span class="_ _8"></span>
                                                                          u
                                                                          <span class="_ _8"></span>{" "}
                                                                          <span class="_ _4"></span>
                                                                          <span class="ff1">
                                                                            (
                                                                            <span class="_ _8"></span>
                                                                            C
                                                                            <span class="_ _8"></span>
                                                                            <span class="ff2">
                                                                              ầ
                                                                              <span class="_ _4"></span>
                                                                              <span class="ff1">
                                                                                n
                                                                                <span class="_ _8"></span>{" "}
                                                                                <span class="_ _8"></span>
                                                                                <span class="ff2">
                                                                                  đ
                                                                                  <span class="_ _4"></span>
                                                                                  <span class="ff1">
                                                                                    i
                                                                                    <span class="_ _8"></span>
                                                                                    <span class="ff2">
                                                                                      ề
                                                                                      <span class="_ _8"></span>
                                                                                      <span class="ff1">
                                                                                        n
                                                                                        <span class="_ _4"></span>{" "}
                                                                                        <span class="_ _8"></span>
                                                                                        m
                                                                                        <span class="_ _8"></span>
                                                                                        <span class="ff2">
                                                                                          ẫ
                                                                                          <span class="_ _4"></span>
                                                                                          <span class="ff1">
                                                                                            u
                                                                                            <span class="_ _8"></span>{" "}
                                                                                            <span class="_ _8"></span>
                                                                                            W
                                                                                            <span class="_ _4"></span>
                                                                                            8
                                                                                            <span class="_ _8"></span>
                                                                                            -
                                                                                            <span class="_ _8"></span>
                                                                                            B
                                                                                            <span class="_ _4"></span>
                                                                                            E
                                                                                            <span class="_ _8"></span>
                                                                                            N
                                                                                            <span class="_ _8"></span>
                                                                                            )
                                                                                            <span class="_ _4"></span>{" "}
                                                                                            <span class="_ _8"></span>
                                                                                            :
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y1e ff3 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    <span class="ff7">
                      
                      <span class="ff5 fs1">
                        {" "}
                        Có <span class="ff6">thẻ</span> xanh{" "}
                        <span class="ff6">tại</span>{" "}
                        <span class="ff6">Mỹ,</span>{" "}
                      </span>
                      
                      <span class="ff5 fs1">
                        {" "}
                        Có <span class="ff6">nơi</span> sinh{" "}
                        <span class="ff6">tại</span>{" "}
                        <span class="ff6">Mỹ,</span>{" "}
                      </span>
                      
                      <span class="ff5">
                        {" "}
                        Có <span class="ff6">địa</span>{" "}
                        <span class="ff6">chỉ</span>{" "}
                        <span class="ff6">nhận</span>{" "}
                        <span class="ff6">thư</span>{" "}
                        <span class="ff6">hoặc</span>{" "}
                        <span class="ff6">địa</span>{" "}
                        <span class="ff6">chỉ</span>{" "}
                        <span class="ff6">thường</span> trú{" "}
                        <span class="ff6">tại</span>{" "}
                        <span class="ff6">Mỹ,</span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y16 ff5 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    <span class="ff7">
                      <span class="ff3"> </span>
                    </span>
                    Có{" "}
                    <span class="ff6 fs1">
                      số<span class="ff5"> </span>điện<span class="ff5"> </span>
                      thoại<span class="ff5"> liên </span>lạc
                      <span class="ff5"> </span>tại<span class="ff5"> </span>Mỹ,
                      <span class="ff5"> </span>
                    </span>
                    <span class="ff7"></span> Có <span class="ff6">lệnh</span>{" "}
                    thanh toán <span class="ff6">định</span>{" "}
                    <span class="ff6">kỳ</span> <span class="ff6">chuyển</span>{" "}
                    <span class="ff6">khoản</span> vào{" "}
                    <span class="ff6">một</span> tài{" "}
                    <span class="ff6">khoản</span> <span class="ff6">mở</span>{" "}
                    <span class="ff6">tại</span> <span class="ff6">Mỹ,</span>{" "}
                  </div>
                  <div class="t m0 x3 h2 y1f ff5 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    <span class="ff7">
                      <span class="_ _8"></span>
                      <span class="ff3">
                        {" "}
                        <span class="_ _8"></span>
                        <span class="ff5">
                          C<span class="_ _4"></span>ó<span class="_ _8"></span>{" "}
                          <span class="_ _8"></span>
                          <span class="ff6">
                            ủ<span class="_ _4"></span>
                            <span class="ff5">
                              y<span class="_ _8"></span>{" "}
                              <span class="_ _8"></span>q
                              <span class="_ _4"></span>u
                              <span class="_ _8"></span>y
                              <span class="_ _8"></span>
                              <span class="ff6">
                                ề<span class="_ _4"></span>
                                <span class="ff5">
                                  n<span class="_ _8"></span>{" "}
                                  <span class="_ _8"></span>h
                                  <span class="_ _8"></span>o
                                  <span class="_ _4"></span>
                                  <span class="ff6">
                                    ặ<span class="_ _8"></span>
                                    <span class="ff5">
                                      c<span class="_ _8"></span>{" "}
                                      <span class="_ _4"></span>c
                                      <span class="_ _8"></span>
                                      <span class="ff6">
                                        ấ<span class="_ _8"></span>
                                        <span class="ff5">
                                          p<span class="_ _4"></span>{" "}
                                          <span class="_ _8"></span>c
                                          <span class="_ _8"></span>ó
                                          <span class="_ _4"></span>{" "}
                                          <span class="_ _8"></span>t
                                          <span class="_ _8"></span>h
                                          <span class="_ _4"></span>
                                          <span class="ff6">
                                            ẩ<span class="_ _8"></span>
                                            <span class="ff5">
                                              m<span class="_ _8"></span>{" "}
                                              <span class="_ _4"></span>q
                                              <span class="_ _8"></span>u
                                              <span class="_ _8"></span>y
                                              <span class="_ _4"></span>
                                              <span class="ff6">
                                                ề<span class="_ _8"></span>
                                                <span class="ff5">
                                                  n<span class="_ _8"></span>{" "}
                                                  <span class="_ _4"></span>k
                                                  <span class="_ _8"></span>ý
                                                  <span class="_ _8"></span>{" "}
                                                  <span class="_ _4"></span>c
                                                  <span class="_ _8"></span>ò
                                                  <span class="_ _8"></span>n
                                                  <span class="_ _4"></span>{" "}
                                                  <span class="_ _8"></span>h
                                                  <span class="_ _8"></span>i
                                                  <span class="_ _4"></span>
                                                  <span class="ff6">
                                                    ệ<span class="_ _8"></span>
                                                    <span class="ff5">
                                                      u
                                                      <span class="_ _8"></span>{" "}
                                                      <span class="_ _8"></span>
                                                      l
                                                      <span class="_ _4"></span>
                                                      <span class="ff6">
                                                        ự
                                                        <span class="_ _8"></span>
                                                        <span class="ff5">
                                                          c
                                                          <span class="_ _8"></span>{" "}
                                                          <span class="_ _4"></span>
                                                          c
                                                          <span class="_ _8"></span>
                                                          h
                                                          <span class="_ _8"></span>
                                                          o
                                                          <span class="_ _4"></span>{" "}
                                                          <span class="_ _8"></span>
                                                          m
                                                          <span class="_ _8"></span>
                                                          <span class="ff6">
                                                            ộ
                                                            <span class="_ _4"></span>
                                                            <span class="ff5">
                                                              t
                                                              <span class="_ _8"></span>{" "}
                                                              <span class="_ _8"></span>
                                                              <span class="ff6">
                                                                đ
                                                                <span class="_ _4"></span>
                                                                ố
                                                                <span class="_ _8"></span>
                                                                <span class="ff5">
                                                                  i
                                                                  <span class="_ _8"></span>{" "}
                                                                  <span class="_ _4"></span>
                                                                  t
                                                                  <span class="_ _8"></span>
                                                                  <span class="ff6">
                                                                    ư
                                                                    <span class="_ _8"></span>
                                                                    ợ
                                                                    <span class="_ _4"></span>
                                                                    <span class="ff5">
                                                                      n
                                                                      <span class="_ _8"></span>
                                                                      g
                                                                      <span class="_ _8"></span>{" "}
                                                                      <span class="_ _4"></span>
                                                                      c
                                                                      <span class="_ _8"></span>
                                                                      ó
                                                                      <span class="_ _8"></span>{" "}
                                                                      <span class="_ _4"></span>
                                                                      <span class="ff6">
                                                                        đ
                                                                        <span class="_ _8"></span>
                                                                        ị
                                                                        <span class="_ _8"></span>
                                                                        <span class="ff5">
                                                                          a
                                                                          <span class="_ _4"></span>{" "}
                                                                          <span class="_ _8"></span>
                                                                          c
                                                                          <span class="_ _8"></span>
                                                                          h
                                                                          <span class="_ _4"></span>
                                                                          <span class="ff6">
                                                                            ỉ
                                                                            <span class="_ _8"></span>
                                                                            <span class="ff5">
                                                                              {" "}
                                                                              <span class="_ _8"></span>
                                                                              t
                                                                              <span class="_ _8"></span>
                                                                              <span class="ff6">
                                                                                ạ
                                                                                <span class="_ _4"></span>
                                                                                <span class="ff5">
                                                                                  i
                                                                                  <span class="_ _8"></span>{" "}
                                                                                  <span class="_ _8"></span>
                                                                                  M
                                                                                  <span class="_ _4"></span>
                                                                                  <span class="ff6">
                                                                                    ỹ
                                                                                    <span class="_ _8"></span>
                                                                                    <span class="ff5">
                                                                                      ,
                                                                                      <span class="_ _8"></span>{" "}
                                                                                      <span class="_ _4"></span>{" "}
                                                                                      <span class="_ _8"></span>
                                                                                      <span class="ff7">
                                                                                        
                                                                                        <span class="_ _8"></span>
                                                                                        <span class="ff5">
                                                                                          {" "}
                                                                                          <span class="_ _4"></span>
                                                                                          C
                                                                                          <span class="_ _8"></span>
                                                                                          ó
                                                                                          <span class="_ _8"></span>{" "}
                                                                                          <span class="_ _4"></span>
                                                                                          <span class="ff6">
                                                                                            đ
                                                                                            <span class="_ _8"></span>
                                                                                            ị
                                                                                            <span class="_ _8"></span>
                                                                                            <span class="ff5">
                                                                                              a
                                                                                              <span class="_ _4"></span>{" "}
                                                                                              <span class="_ _8"></span>
                                                                                              c
                                                                                              <span class="_ _8"></span>
                                                                                              h
                                                                                              <span class="_ _4"></span>
                                                                                              <span class="ff6">
                                                                                                ỉ
                                                                                                <span class="_ _8"></span>
                                                                                                <span class="ff5">
                                                                                                  {" "}
                                                                                                  <span class="_ _8"></span>
                                                                                                  n
                                                                                                  <span class="_ _4"></span>
                                                                                                  h
                                                                                                  <span class="_ _8"></span>
                                                                                                  <span class="ff6">
                                                                                                    ậ
                                                                                                    <span class="_ _8"></span>
                                                                                                    <span class="ff5">
                                                                                                      n
                                                                                                      <span class="_ _4"></span>{" "}
                                                                                                      <span class="_ _8"></span>
                                                                                                      t
                                                                                                      <span class="_ _8"></span>
                                                                                                      h
                                                                                                      <span class="_ _4"></span>
                                                                                                      <span class="ff6">
                                                                                                        ư
                                                                                                        <span class="_ _8"></span>
                                                                                                        <span class="ff5">
                                                                                                          {" "}
                                                                                                          <span class="_ _8"></span>
                                                                                                          h
                                                                                                          <span class="_ _4"></span>
                                                                                                          o
                                                                                                          <span class="_ _8"></span>
                                                                                                          <span class="ff6">
                                                                                                            ặ
                                                                                                            <span class="_ _8"></span>
                                                                                                            <span class="ff5">
                                                                                                              c
                                                                                                              <span class="_ _4"></span>{" "}
                                                                                                              <span class="_ _8"></span>
                                                                                                              l
                                                                                                              <span class="_ _8"></span>
                                                                                                              <span class="ff6">
                                                                                                                ư
                                                                                                                <span class="_ _4"></span>
                                                                                                                <span class="ff5">
                                                                                                                  u
                                                                                                                  <span class="_ _8"></span>{" "}
                                                                                                                  <span class="_ _8"></span>
                                                                                                                  t
                                                                                                                  <span class="_ _8"></span>
                                                                                                                  h
                                                                                                                  <span class="_ _4"></span>
                                                                                                                  <span class="ff6">
                                                                                                                    ư
                                                                                                                    <span class="_ _8"></span>
                                                                                                                    <span class="ff5">
                                                                                                                      {" "}
                                                                                                                      <span class="_ _8"></span>
                                                                                                                      t
                                                                                                                      <span class="_ _4"></span>
                                                                                                                      <span class="ff6">
                                                                                                                        ạ
                                                                                                                        <span class="_ _8"></span>
                                                                                                                        <span class="ff5">
                                                                                                                          i
                                                                                                                          <span class="_ _8"></span>{" "}
                                                                                                                          <span class="_ _4"></span>
                                                                                                                          M
                                                                                                                          <span class="_ _8"></span>
                                                                                                                          <span class="ff6">
                                                                                                                            ỹ
                                                                                                                            <span class="_ _8"></span>
                                                                                                                            <span class="ff5">
                                                                                                                              {" "}
                                                                                                                            </span>
                                                                                                                          </span>
                                                                                                                        </span>
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                  </span>
                                                                                                                </span>
                                                                                                              </span>
                                                                                                            </span>
                                                                                                          </span>
                                                                                                        </span>
                                                                                                      </span>
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                              </span>
                                                                                            </span>
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y20 ff7 fs0 fc0 sc0 ls0 ws0">
                    
                    <span class="ff3">
                      {" "}
                      Không <span class="ff4">phải</span> hai{" "}
                      <span class="ff4">đối</span>{" "}
                      <span class="ff4">tượng</span> trên{" "}
                    </span>
                  </div>
                </div>
                <div class="c x8 y21 w5 h7">
                  <div class="t m0 x3 h2 y1a ff1 fs0 fc0 sc0 ls0 ws0">
                    IV. <span class="ff2">Ảnh</span> và{" "}
                    <span class="ff2">mẫu</span> <span class="ff2">chữ</span> ký{" "}
                    <span class="ff2">của</span> khách hàng.{" "}
                  </div>
                </div>
                <div class="c xa y22 w6 h9">
                  <div class="t m0 xb h2 y23 ff1 fs0 fc0 sc0 ls0 ws0">
                    M<span class="_ _8"></span>
                    <span class="ff2">
                      ẫ<span class="_ _8"></span>
                      <span class="ff1">
                        u<span class="_ _4"></span> <span class="_ _8"></span>c
                        <span class="_ _8"></span>h<span class="_ _4"></span>
                        <span class="ff2">
                          ữ<span class="_ _8"></span>
                          <span class="ff1">
                            {" "}
                            <span class="_ _8"></span>k
                            <span class="_ _4"></span>ý
                            <span class="_ _8"></span>{" "}
                            <span class="_ _8"></span>c
                            <span class="_ _4"></span>h
                            <span class="_ _8"></span>
                            <span class="ff2">
                              ủ<span class="_ _8"></span>
                              <span class="ff1">
                                {" "}
                                <span class="_ _4"></span>t
                                <span class="_ _8"></span>à
                                <span class="_ _8"></span>i
                                <span class="_ _8"></span>{" "}
                                <span class="_ _4"></span>k
                                <span class="_ _8"></span>h
                                <span class="_ _8"></span>o
                                <span class="_ _4"></span>
                                <span class="ff2">
                                  ả<span class="_ _8"></span>
                                  <span class="ff1">n</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 xc h4 y24 ff5 fs1 fc0 sc0 ls0 ws0">
                    (Ký, ghi rõ <span class="ff6">họ</span> tên)
                  </div>
                </div>
                <div class="c xd y22 w7 h9">
                  <div class="t m0 xe h2 y25 ff1 fs0 fc0 sc0 ls0 ws0">
                    M<span class="_ _8"></span>
                    <span class="ff2">
                      ẫ<span class="_ _8"></span>
                      <span class="ff1">
                        u<span class="_ _4"></span> <span class="_ _8"></span>V
                        <span class="_ _8"></span>â<span class="_ _4"></span>n
                        <span class="_ _8"></span> <span class="_ _8"></span>t
                        <span class="_ _4"></span>a<span class="_ _8"></span>y
                        <span class="_ _8"></span> <span class="_ _4"></span>c
                        <span class="_ _8"></span>h<span class="_ _8"></span>
                        <span class="ff2">
                          ủ<span class="_ _4"></span>
                          <span class="ff1">
                            {" "}
                            <span class="_ _8"></span>t
                            <span class="_ _8"></span>à
                            <span class="_ _4"></span>i
                            <span class="_ _8"></span>{" "}
                            <span class="_ _8"></span>k
                            <span class="_ _8"></span>h
                            <span class="_ _4"></span>o
                            <span class="_ _8"></span>
                            <span class="ff2">
                              ả<span class="_ _8"></span>
                              <span class="ff1">n</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="c x8 y26 w8 ha">
                  <div class="t m0 xf h2 y27 ff4 fs0 fc0 sc0 ls0 ws0">
                    Ảnh<span class="ff3"> </span>
                  </div>
                  <div class="t m0 x10 hb y28 ff6 fs4 fc0 sc0 ls0 ws0">
                    (nếu<span class="ff5"> có)</span>
                  </div>
                </div>
                <div class="c xa y29 w9 hc">
                  <div class="t m0 x3 h4 y2a ff1 fs1 fc0 sc0 ls0 ws0">(1)</div>
                </div>
                <div class="c x11 y29 wa hc">
                  <div class="t m0 x3 h4 y2a ff1 fs1 fc0 sc0 ls0 ws0">( 2)</div>
                </div>
                <div class="c xd y29 wb hc">
                  <div class="t m0 x3 h4 y2a ff1 fs1 fc0 sc0 ls0 ws0">(1)</div>
                </div>
                <div class="c x12 y29 wa hc">
                  <div class="t m0 x3 h4 y2a ff1 fs1 fc0 sc0 ls0 ws0">(2)</div>
                </div>
                <div class="c x8 y2b wc h7">
                  <div class="t m0 x3 h2 y1a ff1 fs0 fc0 sc0 ls0 ws0">
                    VI. <span class="ff2">Phần</span> dành cho Ngân hàng
                  </div>
                </div>
                <div class="c x8 y2c wd hd">
                  <div class="t m0 x3 h2 y2d ff3 fs0 fc0 sc0 ls0 ws0">
                    Agribank <span class="ff4">đồng</span> ý cung{" "}
                    <span class="ff4">cấp</span> cho khách hàng các{" "}
                    <span class="ff4">dịch</span> <span class="ff4">vụ</span>{" "}
                    <span class="ff4">như</span> <span class="ff4">đã</span>{" "}
                    <span class="ff4">đăng</span> ký <span class="ff4">cụ</span>{" "}
                    <span class="ff4">thể</span> :
                  </div>
                  <div class="t m0 x3 h2 y2e ff4 fs1 fc0 sc0 ls0 ws0">
                    Số
                    <span class="ff3">
                      {" "}
                      CIF
                      <span class="fs0">
                        :<span className="url-parameter"><span className="url-container ff3"> {item.CifNumber}</span><span className="dot1"></span></span>………………………………...……...………………………………...…Ngày{" "}
                        <span class="ff4">hiệu</span>{" "}
                        <span class="ff4">lực:</span><span className="url-parameter"><span className="url-container ff3"> {item.CifValid}</span><span className="dot1"></span></span> ……………..…………
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y2f ff4 fs0 fc0 sc0 ls0 ws0">
                    Số
                    <span class="ff3">
                      {" "}
                      TKTT ( <span class="ff7"></span>{" "}
                    </span>
                    ngẫu
                    <span class="ff3">
                      {" "}
                      nhiên, <span class="ff7"></span> theo yêu{" "}
                    </span>
                    cầu):<span className="url-parameter"><span className="url-container ff3"> {item.Account1}</span><span className="dot1"></span></span>…………………………...………Loại<span class="ff3"> </span>
                    tiền:<span className="url-parameter"><span className="url-container ff3"> {item.TypeOfMoney1}</span><span className="dot1"></span></span>........<span class="ff3"> Ngày </span>hiệu
                    <span class="ff3"> </span>lực:
                    <span class="ff3"><span className="url-parameter"><span className="url-container ff3"> {item.Valid1}</span><span className="dot1"></span></span> …….........</span>
                  </div>
                  <div class="t m0 x3 h2 y30 ff4 fs0 fc0 sc0 ls0 ws0">
                    Số
                    <span class="ff3">
                      {" "}
                      TKTT ( <span class="ff7"></span>{" "}
                    </span>
                    ngẫu
                    <span class="ff3">
                      {" "}
                      nhiên, <span class="ff7"></span> theo yêu{" "}
                    </span>
                    cầu):<span className="url-parameter"><span className="url-container ff3"> {item.Account1}</span><span className="dot1"></span></span>…………………………...………Loại<span class="ff3"> </span>
                    tiền:<span className="url-parameter"><span className="url-container ff3"> {item.TypeOfMoney2}</span><span className="dot1"></span></span>........<span class="ff3"> Ngày </span>hiệu
                    <span class="ff3"> </span>lực:
                    <span class="ff3"><span className="url-parameter"><span className="url-container ff3"> {item.Valid2}</span><span className="dot1"></span></span> …….........</span>
                  </div>
                  <div class="t m0 x3 h2 y31 ff7 fs0 fc0 sc0 ls0 ws0">
                    <span class="ff3"> SMS Banking </span>
                    <span class="ff3"> Agribank E-Mobile Banking </span>
                    <span class="ff3"> Bank Plus </span>
                  </div>
                  <div class="t m0 x3 h2 y32 ff7 fs0 fc0 sc0 ls0 ws0">
                    <span class="ff3"> Internet Banking (</span>
                    <span class="ff3"> DV tài chính </span>
                    <span class="ff3"> DV thanh toán </span>
                    <span class="ff3"> DV phi tài chính) </span>
                  </div>
                  <div class="t m0 x3 h2 y33 ff3 fs0 fc0 sc0 ls0 ws0">
                    Phát hành <span class="ff4">thẻ</span> ghi{" "}
                    <span class="ff4">nợ,</span> <span class="ff4">Số</span>{" "}
                    <span class="ff4">thẻ:<span className="url-parameter"><span className="url-container ff3"> {item.IssueDebitCard}</span><span className="dot1"></span></span>………………..…………</span>{" "}
                    <span class="ff7"></span> <span class="ff4">Bảo</span>{" "}
                    <span class="ff4">hiểm</span> <span class="ff4">chủ</span>{" "}
                    <span class="ff4">thẻ</span> <span class="ff7"></span>{" "}
                    Internet{" "}
                  </div>
                  <div class="t m0 x3 h2 y34 ff4 fs0 fc0 sc0 ls0 ws0">
                    Nhờ<span class="ff3"> thu </span>tự
                    <span class="ff3"> </span>động
                    <span class="ff3">
                      {" "}
                      : <span class="ff7"></span>{" "}
                    </span>
                    Điện
                    <span class="ff3">
                      {" "}
                      <span class="ff7"></span>{" "}
                    </span>
                    Nước
                    <span class="ff3">
                      {" "}
                      <span class="ff7"></span>{" "}
                    </span>
                    Viễn
                    <span class="ff3">
                      {" "}
                      thông <span class="ff7"></span>{" "}
                    </span>
                    Học
                    <span class="ff3">
                      {" "}
                      phí <span class="ff7"></span><span className="url-parameter"><span className="url-container ff3"> {item.OtherAutoPayment}</span><span className="dot1"></span></span> ………….{" "}
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y35 ff3 fs0 fc0 sc0 ls0 ws0">
                    Agribank không <span class="ff4">đồng</span> ý, lý do:<span className="url-parameter"><span className="url-container ff3"> {item.UnAcceptable}</span><span className="dot1"></span></span> ..………
                    ……………………………………………..……………………………………
                  </div>
                  <div class="t m0 x3 h2 y36 ff5 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    <span className="url-parameter"><span className="url-container ff3"> {item.Place}</span><span className="dot1"></span></span>………..<span class="ff4">,ngày<span className="url-parameter"><span className="url-container ff3"> {item.Date}</span><span className="dot1"></span></span>……tháng<span className="url-parameter"><span className="url-container ff3"> {item.Month}</span><span className="dot1"></span></span>……năm</span><span className="url-parameter"><span className="url-container ff3"> {item.Year}</span><span className="dot1"></span></span>………{" "}
                  </div>
                </div>
                <div class="c x8 y37 we he">
                  <div class="t m0 x13 h2 y38 ff1 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    Giao <span class="ff2">dịch</span> viên
                    <span class="fs3">
                      {" "}
                      <span class="ff5">
                        (
                        <span class="fs1">
                          Ký,ghi rõ <span class="ff6">họ</span> tên
                        </span>
                        )
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y39 ff1 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    GDV (1) GDV (2)
                  </div>
                </div>
                <div class="c x14 y37 wf he">
                  <div class="t m0 x3 h2 y38 ff1 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    <span class="ff2">Kiểm</span> soát
                    <span class="fs3">
                      {" "}
                      <span class="ff5 fs1">
                        (Ký, ghi rõ <span class="ff6">họ</span> tên
                        <span class="fs4">)</span>
                      </span>
                    </span>
                  </div>
                  <div class="t m0 x3 h2 y39 ff1 fs0 fc0 sc0 ls0 ws0">
                    {" "}
                    KS (1) KS (2)
                  </div>
                </div>
                <div class="c x15 y37 w10 he">
                  <div class="t m0 x16 h2 y38 ff1 fs0 fc0 sc0 ls0 ws0">
                    Giám <span class="ff2">đốc</span>
                  </div>
                  <div class="t m0 x10 h4 y3a ff5 fs1 fc0 sc0 ls0 ws0">
                    (Ký, ghi rõ <span class="ff6">họ</span> tên và{" "}
                    <span class="ff6">đóng</span> <span class="ff6">dấu</span>
                    <span class="fs4">)</span>
                  </div>
                </div>
              </div>
              <div
                class="pi"
                data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
              ></div>
            </div>
          </div> 
          
        </div>
      </div>
    );
  })}
      
    </Bound>
  );
}
