import React, {useState, useEffect} from 'react'
//styles
import {Bound} from './index.styles';

//image
// import logo from '../../../assets/images/logo.png';
const mockData = [
  {
    CifNumber: "0239943123",
    ContractNumber: "2342425",
    Branch: "Kỳ Đồng",
    UserName: "Nguyen Van A",
    DateOfBirth: "3/5/1998",
    Occupation: "Student",
    Position: "Student",
    TaxIdenNumber: "394859534854",
    Nationality: "VietNam",
    Nation: "Kinh",
    Religion: "Catholics",
    IdenCard: "292346859",
    IDateOfIssue: "12/4/2010",
    IPlaceOfIssue: "Ho Chi Minh city",
    BirthCertificate: "34566788865",
    DateOfIssue: "12/4/2010",
    PlaceOfIssue: "Ho Chi Minh city",
    Phone: "092323234",
    Fax: "2323213",
    Email: "ert@gmail.com",
    Passport: "23456789",
    UserAddress: "23 bui thi xuan street, District 1, Ho Chi Minh city",
    CurrentAddress: "23 bui thi xuan street, District 1, Ho Chi Minh city",
    Spouse: "Nguyen Van B",
    SpouseIdenCard: "455444566",
    SpouseDateOfIssue: "22/7/2010",
    SpousePlaceOfIssue: "Ho Chi Minh city",
    Name: "Nguyen Van A",
    ODateOfBirth: "17/8/1990", 
    ONationality: "VietNam",
    ONation: "Kinh",
    OReligion: "Catholics",
    OIdenCard: "292346859",
    ODateOfIssue: "12/4/2010",
    OPlaceOfIssue: "Ho Chi Minh city",
    Address: "23 bui thi xuan street, District 1, Ho Chi Minh city",
    CurAddress: "96 bui thi xuan street, District 1, Ho Chi Minh city",
    OPassport: "23456789",
    Organization: "Abc company",
    LegalRepresentative: "nguyen van C",
    OPhone: "092323234",
    OFax: "2323213",
    OEmail: "ert@gmail.com",
    Bussiness: "Communication",
    Location: "Ho Chi Minh city",
    HeadQuarter: "HCM city",
    ContractNo: "232423554343",
    SMSPhone: "093423444",
    Ebanking: "032423435",
    Bankplus: "32432423234",
    CellphoneOTP: "32423554354",
    ServiceUserName: "nguyen van d",
    ServiceuserCode: "9423434",
    Date: "09/03/2020",


  }

]


export default function CIF1() {
  const [data, setData] = useState(mockData);
  useEffect(() => {
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var cif = url.searchParams.get("cif");
    var contractNum = url.searchParams.get("contractNum");
    var branch = url.searchParams.get("branch");
    var usename = url.searchParams.get("username");
    var dateofbirth = url.searchParams.get("dateofbirth");
    var occupation = url.searchParams.get("occupation");
    var position = url.searchParams.get("position");
    var tax = url.searchParams.get("tax");
    var nationality = url.searchParams.get("nationality");
    var nation = url.searchParams.get("nation");
    var religion = url.searchParams.get("religion");
    var idencard = url.searchParams.get("idencard");
    var idate = url.searchParams.get("idate");
    var iplace = url.searchParams.get("iplace");
    var birthCer = url.searchParams.get("birthCer");
    var dateOfIssue = url.searchParams.get("dateOfIssue");
    var placeOfIssue = url.searchParams.get("placeOfIssue");
    var phone = url.searchParams.get("phone");
    var fax = url.searchParams.get("fax");
    var email= url.searchParams.get("email");
    var passport = url.searchParams.get("passport");
    var userAddress = url.searchParams.get("userAddress");
    var curAdd = url.searchParams.get("curAdd");
    var spouse = url.searchParams.get("spouse");
    var spousecard = url.searchParams.get("spousecard");
    var sdate = url.searchParams.get("sdate");
    var sPlace = url.searchParams.get("sPlace");
    var name = url.searchParams.get("name");
    var oBirth = url.searchParams.get("oBirth");
    var oNationality = url.searchParams.get("oNationality");
    var oNat = url.searchParams.get("oNat");
    var oRel = url.searchParams.get("oRel");
    var oIden = url.searchParams.get("oIden");
    var oDate = url.searchParams.get("oDate");
    var oPlace = url.searchParams.get("oPlace");
    var oAdd = url.searchParams.get("oAdd");
    var oCurAdd = url.searchParams.get("oCurAdd");
    var oPas = url.searchParams.get("oPas");
    var organization = url.searchParams.get("organization");
    var legalRe = url.searchParams.get("legalRe");
    var oPhone = url.searchParams.get("oPhone");
    var oFax = url.searchParams.get("oFax");
    var oMail = url.searchParams.get("oMail");
    var business = url.searchParams.get("business");
    var location = url.searchParams.get("location");
    var head = url.searchParams.get("head");
    var contract = url.searchParams.get("contract");
    var sms = url.searchParams.get("sms");
    var eBank = url.searchParams.get("eBank");
    var plus = url.searchParams.get("plus");
    var cellOTP = url.searchParams.get("cellOTP");
    var serviceUser = url.searchParams.get("serviceUser");
    var serviceCode = url.searchParams.get("serviceCode");
    var valDate = url.searchParams.get("valDate");

    
    
    setData({...data, CifNumber: cif, ContractNumber: contractNum, Branch: branch, UserName: usename, DateOfBirth: dateofbirth, Occupation: occupation, Position: position, TaxIdenNumber: tax, Nationality: nationality, Nation: nation, Religion: religion, IdenCard: idencard, IDateOfIssue: idate, IPlaceOfIssue: iplace, BirthCertificate: birthCer, DateOfIssue: dateOfIssue, PlaceOfIssue: placeOfIssue, Phone: phone, Fax: fax, Email: email, Passport: passport, UserAddress: userAddress, CurrentAddress: curAdd, Spouse: spouse, SpouseIdenCard: spousecard, SpouseDateOfIssue: sdate, SpousePlaceOfIssue: sPlace, Name: name, ODateOfBirth: oBirth, ONationality: oNationality, ONation: oNat, OReligion: oRel, OIdenCard: oIden, ODateOfIssue: oDate, OPlaceOfIssue: oPlace, Address: oAdd, CurAddress: oCurAdd, OPassport: oPas, Organization: organization, LegalRepresentative: legalRe, OEmail: oMail,
    OFax: oFax, OPhone: oPhone, Bussiness: business, Location: location, HeadQuarter: head, ContractNo: contract, SMSPhone: sms, Ebanking: eBank, Bankplus: plus, CellphoneOTP: cellOTP, ServiceUserName: serviceUser, ServiceuserCode: serviceCode, Date: valDate

     })
    return () => {
      
    }
  }, [])
  return (
    <Bound>
      <div id="main" className="fw">
        <div className="site-center">
                <div >
          <table width={736} cellPadding={7} cellSpacing={0} style={{pageBreakBefore: 'always'}}>
            <colgroup><col width={383} />
              <col width={325} />
            </colgroup><tbody>
              <tr valign="top">
                <td width={383} height={5} bgcolor="#ffffff" style={{background: '#ffffff'}}><p className="western" align="justify" style={{textIndent: '0in', marginTop: '0in'}}>
                    <img alt="" src="data:image/jpeg;base64,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" name="Image1" align="bottom" width={241} height={69} border={0} />
                  </p>
                </td>
                <td width={325} bgcolor="#ffffff" style={{background: '#ffffff'}}><p className="western " align="justify" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}} ><font face="Times New Roman, serif">Số
                      CIF</font>
                      <span className="url-parameter"><span className="url-container"> {data.CifNumber}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1">:………………………………...………...........…</font></font></span>
                      </font></font></p>
                  <p className="western url-parameter" align="justify" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font  size={2} style={{fontSize: '11pt'}}><font  face="Times New Roman, serif">Số
                          TKTT/Số hợp đồng </font>
                         
                          <span className="url-parameter"><span className="url-container"> {data.ContractNumber}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1">:……………………………….</font></font></span>
                          </font></font></p>
                  <p className="western" align="center" style={{textIndent: '0in', marginTop: '0in', letterSpacing: '-1.0pt'}}>
                    <br />
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} width={722} height={5} valign="top" bgcolor="#ffffff" style={{background: '#ffffff'}}><p className="western" align="center" style={{marginRight: '0.15in', textIndent: '0in', marginTop: '0.03in', marginBottom: '0in', letterSpacing: '-1.0pt'}}>
                    <br />
                  </p>
                  <p className="western" align="center" style={{marginRight: '0.15in', textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={4} style={{fontSize: '14pt'}}><b>ĐĂNG
                              KÝ THÔNG TIN KHÁCH HÀNG, ĐỀ
                              NGHỊ KIÊM HỢP ĐỒNG</b></font></font></font></font></p>
                  <p className="western" align="center" style={{marginRight: '0.15in', textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={4} style={{fontSize: '14pt'}}><b>MỞ
                              VÀ SỬ DỤNG DỊCH VỤ TÀI
                              KHOẢN THANH TOÁN</b></font></font></font></font>
                  </p>
                  <p align="center" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3} style={{fontSize: '12pt'}}><i>(Dành
                              cho khách hàng cá nhân)</i></font></font></font></font></p>
                  <p className="western" align="center" style={{marginRight: '0.15in', textIndent: '0in', marginTop: '0.14in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3} style={{fontSize: '12pt'}}><b>Kính
                              gửi: Agribank - Chi nhánh</b></font></font><font face="Times New Roman, serif"><font size={3} style={{fontSize: '12pt'}}><b>
                            </b></font></font><font face="Times New Roman, serif"><font size={3} style={{fontSize: '12pt'}}><b>
                            </b></font></font>
                    <font face="Times New Roman, serif"><font size={3} style={{fontSize: '12pt'}}><span className="url-parameter "><span title={data.Branch} className="url-container hidden-content"> {data.Branch}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>...........………………….………………..….…………………</font>
                            </font>
                           
                            </font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0in'}}> <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">	</font></font></font></p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} width={722} height={5} bgcolor="#ffffff" style={{background: '#ffffff'}}>
                  <ol type="I"><li style={{marginLeft: 7}}><p align="left" style={{textIndent: '0in', marginTop: '0in'}}>
                        <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><b>Thông
                                tin cơ bản khách hàng. </b></font></font></font>
                      </p>
                    </li></ol>
                </td>
              </tr>
            </tbody>
            <tbody >
              <tr  >
                <td colSpan={2} width={722} height={5} valign="top" bgcolor="#ffffff" style={{background: '#ffffff', padding: 5, borderTop: "1px solid #000", borderLeft: "1px solid #000", borderRight: "1px solid #000"}}><p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><b>Thông
                            tin chủ tài khoản: </b></font><font face="Times New Roman, serif">
                          Họ và tên:
                          <span className="url-parameter"><span className="url-container  hidden-content"> {data.UserName}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>
                          ….…………………………………………...………….…....………….…................</font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Ngày sinh:<span className="url-parameter"><span className="url-container ff4"> {data.DateOfBirth}</span><span className="fs1"></span></span>.........................Nghề
                          nghiệp: <span className="url-parameter"><span className="url-container"> {data.Occupation}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span> ......………………Chức
                          vụ: <span className="url-parameter"><span className="url-container"> {data.Position}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………..........…MST
                          cá nhân:<span className="url-parameter"><span className="url-container"> {data.TaxIdenNumber}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>...........................……</font><font face="Times New Roman, serif"><i>
                          </i></font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Giới
                          tính: </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4}}></span></font><font face="Times New Roman, serif">
                          Nam</font><font face="Times New Roman, serif"> </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4}}></span></font><font face="Times New Roman, serif"><b>
                          </b></font><font face="Times New Roman, serif" style={{marginRight: 10}}>Nữ</font><font face="Times New Roman, serif"><i>
                          </i></font><font face="Times New Roman, serif">Quốc
                          tịch:<span className="url-parameter"><span className="url-container"> {data.Nationality}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…......................Dân
                          tộc:<span className="url-parameter"><span className="url-container"> {data.Nation}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…............Tôn giáo:<span className="url-parameter"><span className="url-container"> {data.Religion}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>..............Người
                          cư trú: </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4}}></span></font><font face="Times New Roman, serif"><b>
                          </b></font><font face="Times New Roman, serif">Có </font><font face="Webdings, fantasy"><span lang="fr-FR"></span></font><font face="Times New Roman, serif"><b>
                          </b></font><font face="Times New Roman, serif" style={{paddingLeft : 4}}>Không </font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Số
                          CCCD/CMND/Hộ chiếu:<span className="url-parameter"><span className="url-container"> {data.IdenCard}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>….......................……………....................Ngày
                          cấp:<span className="url-parameter"><span className="url-container"> {data.IDateOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>....................…Nơi cấp</font><font face="Times New Roman, serif"><i>:</i></font><font face="Times New Roman, serif" ><span className="url-parameter"><span className="url-container"> {data.IPlaceOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>….......................
                        </font></font></font>
                  </p>
                  <p className="western hidden-content" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Số
                          định danh CN/Số Giấy khai sinh (KH dưới
                          14 tuổi):<span className="url-parameter"><span className="url-container"> {data.BirthCertificate}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>.........................Ngày
                          cấp:<span className="url-parameter"><span className="url-container"> {data.DateOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>....................…Nơi cấp</font><font face="Times New Roman, serif">:</font><font face="Times New Roman, serif" title={data.PlaceOfIssue}><span className="url-parameter"><span className="url-container"> {data.PlaceOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>….......................</font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">ĐTDĐ:<span className="url-parameter"><span className="url-container"> {data.Phone}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>….......................
                            Cố
                            định/Fax:<span className="url-parameter"><span className="url-container"> {data.Fax}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>….......................Email:<span className="url-parameter"><span className="url-email hidden-info" title={data.Email} > {data.Email}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…..............…..............</span></font><font face="Times New Roman, serif"><span style={{letterSpacing: '-0.6pt', marginLeft: 8}}>
                            Thị thực nhập cảnh số</span></font><font face="Times New Roman, serif"><span className="url-parameter"><span className="url-container"> {data.Passport}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…...................…</font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Địa
                            chỉ thường trú tại Việt Nam/
                            cư trú ở nước
                            ngoài:
                            <span className="url-parameter"><span className="url-container hidden-content"> {data.UserAddress}</span><font face="Times New Roman, serif" className="url-parameter "><font size={2} style={{fontSize: '10pt'}} className="fs1">………………………………...………......................................................…</font></font></span>
                            </span></font><font face="Times New Roman, serif"><span style={{letterSpacing: '-0.6pt'}}><span lang="pt-BR">
                            </span></span></font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Địa
                            chỉ hiện tại/ cư trú tại
                            VN:
                            <span className="url-parameter"><span className="url-container hidden-content"> {data.CurrentAddress}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1">………..........................................................................................................................…........…...........</font></font></span>
                           </span></font></font></font></p>
                  <p className="western hidden-content" align="justify" style={{textIndent: '0in', marginTop: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Họ tên vợ/chồng:<span className="url-parameter"><span className="url-container"> {data.Spouse}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>
                    .............................................Số
                            CCCD/CMND/HC:<span className="url-parameter"><span className="url-container"> {data.SpouseIdenCard}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span><span >..........................</span>Ngày
                            cấp:<span className="url-parameter"><span className="url-date hidden-info" title={data.SpouseDateOfIssue}> {data.SpouseDateOfIssue}</span><font face="Times New Roman, serif" className="url-date"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>..............Nơi cấp</span></font><font face="Times New Roman, serif"><span lang="pt-BR" ><i title={data.SpousePlaceOfIssue}>:<span className="url-parameter"><span className="url-container"> {data.SpousePlaceOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>...............</i></span></font><font face="Times New Roman, serif"><span lang="pt-BR">
                          </span></font></font></font>
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} width={722} height={5} valign="top" bgcolor="#ffffff" style={{background: '#ffffff', padding: 5, borderBottom: "1px solid #000", borderLeft: "1px solid #000", borderRight: "1px solid #000"}}>
                  <p className="western  fw" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in', display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR"><b>Thông tin</b></span></font><font face="Webdings, fantasy"><span style={{letterSpacing: '-0.3pt'}}><span lang="fr-FR " style={{paddingRight : 4}}><b className=" justify-icon" ></b></span></span></font><font face="Times New Roman, serif"><span style={{letterSpacing: '-0.3pt'}}><span lang="pt-BR"><b>
                                Người giám hộ (cá nhân/</b></span></span></font><font face="Times New Roman, serif"><span style={{letterSpacing: '-0.8pt'}}><span lang="pt-BR"><b>
                                tổ chức)                    </b></span></span></font><font face="Times New Roman, serif"><span lang="pt-BR"><b>
                            </b></span></font><font face="Webdings, fantasy"><span lang="fr-FR"><b className=" justify-icon" style={{paddingRight : 4}}></b></span></font><font face="Times New Roman, serif"><span lang="pt-BR"><b>
                              Người đại diện theo pháp luật</b></span></font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Họ
                            và tên:  <span className="url-parameter"><span className="url-container hidden-content" title={data.Name}> {data.Name}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>
                            ……….…….…………..…………….………...…….…  Ngày
                            sinh:<span className="url-parameter"><span className="url-container"> {data.ODateOfBirth}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span> ........................Giới tính: </span></font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4}}></span></font><font face="Times New Roman, serif"><span lang="pt-BR"><b>
                            </b></span></font><font face="Times New Roman, serif" style={{paddingRight : 4}}><span lang="pt-BR">Nam</span></font><font face="Times New Roman, serif"><span lang="pt-BR">
                          </span></font><font face="Webdings, fantasy"><span lang="fr-FR" style={{paddingRight : 4}}></span></font><font face="Times New Roman, serif"><span lang="pt-BR"><b>
                            </b></span></font><font face="Times New Roman, serif" ><span lang="pt-BR" >Nữ</span></font><font face="Times New Roman, serif"><span lang="pt-BR"><i>
                            </i></span></font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt', }}><font face="Times New Roman, serif"><span lang="pt-BR" >  Quốc
                            tịch:<span className="url-parameter"><span className="url-container"> {data.ONationality}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>...……................……….....Dân
                            tộc:<span className="url-parameter"><span className="url-container"> {data.ONation}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……................Tôn
                            giáo:<span className="url-parameter"><span className="url-container"> {data.OReligion}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……................….
                            Người cư trú: </span></font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4}}></span></font><font face="Times New Roman, serif" style={{paddingRight: 13}}><span lang="pt-BR">
                            Có </span></font><font face="Times New Roman, serif"><span lang="pt-BR">
                          </span></font><font face="Times New Roman, serif"><span lang="pt-BR">
                          </span></font><font face="Webdings, fantasy"><span lang="fr-FR" style={{ paddingRight : 4}}></span></font><font face="Times New Roman, serif"><span lang="pt-BR"><b>
                            </b></span></font><font face="Times New Roman, serif"><span lang="pt-BR" >Không
                          </span></font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Số
                          CCCD/CMND/Hộ chiếu:<span className="url-parameter"><span className="url-container"> {data.OIdenCard}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…......................……………...….…Ngày
                            cấp:<span className="url-parameter"><span className="url-container"> {data.ODateOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>….......................Nơi
                            cấp</span></font><font face="Times New Roman, serif"><span lang="pt-BR"><i>:</i></span></font><font face="Times New Roman, serif"><span lang="pt-BR"><span className="url-parameter"><span className="url-container"> {data.OPlaceOfIssue}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…..........................…
                          </span></font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Địa
                            chỉ thường
                            trú:<span className="url-parameter"><span className="url-container hidden-content" title={data.Address}> {data.Address}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>
                            .……………............................…............................................
                            Thị thực nhập cảnh số:<span className="url-parameter"><span className="url-container"> {data.OPassport}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>.….................……</span></font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Địa
                            chỉ nơi ở hiện
                            tại:<span className="url-parameter"><span className="url-container hidden-content" title={data.CurAddress}> {data.CurAddress}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…………………….........………………………………………………………………….....…...........</span></font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Tên
                            tổ chức (người giám
                            hộ):<span className="url-parameter"><span title={data.Organization} style={{width: 180}} className="url-container hidden-info"> {data.Organization}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>..................................................Người
                            đại diện hợp
                            pháp:<span className="url-parameter"><span className="url-container"> {data.LegalRepresentative}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>.........................................................</span></font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Điện
                            thoại liên hệ:<span className="url-parameter"><span className="url-container"> {data.OPhone}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………….............................Cố
                            định/Fax:<span className="url-parameter"><span className="url-container"> {data.OFax}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…......….....................Email:<span className="url-parameter"><span className="url-container"> {data.OEmail}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……...............................................
                          </span></font></font></font>
                  </p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Lĩnh
                            vực HĐKD:<span className="url-parameter"><span className="url-container"> {data.Bussiness}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>..............................................Địa
                            chỉ giao
                            dịch:<span className="url-parameter"><span className="url-container"> {data.Location}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>.............................................................................................</span></font></font></font></p>
                  <p className="western" align="justify" style={{textIndent: '0in', marginTop: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR">Địa
                            chỉ đặt trụ sở
                            chính:<span className="url-parameter"><span className="url-container"> {data.HeadQuarter}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>............................................................................................................................................................</span></font></font></font></p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} width={722} height={5} valign="top" bgcolor="#ffffff" style={{background: '#ffffff'}}>
                  <ol type="I" start={2}><li style={{marginLeft: 7}}><p align="left" style={{textIndent: '0in'}}>
                        <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="pt-BR"><b>Khách
                                  hàng đăng ký mở TKTT và sử
                                  dụng dịch vụ: </b></span></font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}><span lang="pt-BR"><i>(Đề
                                    nghị đánh dấu (</i></span></font></font><font face="Wingdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><i></i></font></font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}><span lang="pt-BR"><i>)
                                    vào ô trống để xác nhận
                                    yêu cầu dịch vụ)</i></span></font></font></font></font></p>
                    </li></ol>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={2} width={722} height={4} valign="top" bgcolor="#ffffff"  style={{background: '#ffffff', padding: 5, border: "1px solid #000"}}><p align="justify" style={{textIndent: '0in', marginTop: '0.03in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="de-DE"><b>1.
                              Đăng ký mở TKTT </b></span></font><font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4 , paddingLeft: 10}}></span></font></font><font face="Times New Roman, serif"><span lang="pt-BR">
                            Số TKTT ngẫu nhiên;  </span></font><font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4,  paddingLeft: 10}}></span></font></font><font face="Times New Roman, serif"><span lang="pt-BR">
                            Số TKTT theo yêu
                            cầu:<span className="url-parameter"><span className="url-container"> {data.ContractNo}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>.........................................................</span></font></font></font></p>
                  <p align="justify" style={{textIndent: '0in', marginTop: '0.03in', marginBottom: '0in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="de-DE">Loại tiền tệ: </span></font><font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4}}></span></font></font><font face="Times New Roman, serif"><span lang="pt-BR">
                            VND (là TK mặc định nếu KH đăng ký NHĐT);   </span></font><font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 20}}></span></font></font><font face="Times New Roman, serif"><span lang="pt-BR">
                            USD;           </span></font><font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 35}}></span></font></font><font face="Times New Roman, serif"><span lang="pt-BR">
                            EUR;       </span></font><font face="Times New Roman, serif"><span lang="de-DE"><b>
                            </b></span></font><font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 35}}></span></font></font><font face="Times New Roman, serif"><span lang="pt-BR">
                            Khác………..</span></font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0.03in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="de-DE"><b>2.
                              Đăng ký </b></span></font><font face="Times New Roman, serif"><span lang="vi-VN"><b>dịch
                              vụ </b></span></font><font face="Times New Roman, serif"><span lang="de-DE"><b>Mobile
                              Banking </b></span></font></font></font>
                  </p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                  <font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 4}}></span></font></font><font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="vi-VN">SMS</span></font><font face="Times New Roman, serif">
                          Banking        </font><font face="Times New Roman, serif"><span lang="vi-VN">
                          </span></font><font face="Times New Roman, serif">
                        </font><font face="Times New Roman, serif" style={{marginLeft: 90}}>Số ĐT sử
                          dụng</font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>:<span className="url-parameter"><span className="url-container"> {data.SMSPhone}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……….…………….......</font></font><font face="Times New Roman, serif">Số
                          khác</font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}><span className="url-parameter"><span className="url-container"> {data.SMSPhone}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…………..…</font></font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}><span lang="vi-VN">………….</span></font></font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>………….....………</font></font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                  <font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 2}}></span></font></font> <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><span lang="vi-VN">Agribank
                          </span></font><font face="Times New Roman, serif">E-Mobile
                          Banking </font><font face="Times New Roman, serif" style={{marginLeft: 2}}>Số ĐT
                          sử dụng</font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>:
                          <span className="url-parameter"><span className="url-container"> {data.Ebanking}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>
                          ……….……………........</font></font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                  <font face="Webdings, fantasy"><font size={2} style={{fontSize: '10pt'}}><span lang="fr-FR " style={{paddingRight : 2}}></span></font></font> <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Bank
                        </font><font face="Times New Roman, serif"><span lang="vi-VN">p</span></font><font face="Times New Roman, serif">lus
                        </font><font face="Times New Roman, serif"><span lang="de-DE">
                          </span></font><font face="Times New Roman, serif"><span lang="vi-VN">
                          </span></font><font face="Times New Roman, serif" style={{marginLeft: 114}}>Số ĐT
                          sử dụng</font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>:<span className="url-parameter"><span className="url-container"> {data.Bankplus}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……….……………........</font></font></font></font></p>
                  <p lang="de-DE" align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                  </p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.03in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><b>3.
                            Đăng ký </b></font><font face="Times New Roman, serif"><span lang="vi-VN"><b>dịch
                              vụ </b></span></font><font face="Times New Roman, serif"><b>Internet
                            Banking. </b></font><font face="Times New Roman, serif"></font><font face="Webdings, fantasy"><span lang="fr-FR  " style={{paddingRight : 4, paddingLeft: 10}}></span></font><font face="Times New Roman, serif">
                          DV tài chính   </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 10}}></span></font><font face="Times New Roman, serif">
                          DV thanh toán  </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 10}}></span></font><font face="Times New Roman, serif">
                          DV phi tài chính</font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={2} style={{fontSize: '9pt'}}><i>Dịch
                              vụ Internet Banking của Agribank được
                              cung cấp tại </i></font></font><font color="#0000ff"><a href="https://ibank.agribank.com.vn/ibank/"><font color="#000000"><font face="Times New Roman, serif"><font size={2} style={{fontSize: '9pt'}}><i><span style={{textDecoration: 'none'}}>https://ibank.agribank.com.vn/ibank/</span></i></font></font></font></a></font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '9pt'}}><i>
                            </i></font></font></font></font>
                  </p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Phương
                          thức nhận mã xác thực giao dịch:
                        </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 4}}></span></font><font face="Times New Roman, serif">
                          SMS OTP</font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4,  paddingLeft: 4}}></span></font><font face="Times New Roman, serif">
                          Soft OTP (</font><font face="Times New Roman, serif"><span lang="vi-VN">Loại……</span></font><font face="Times New Roman, serif">..…</font><font face="Times New Roman, serif"><span lang="vi-VN">…</span></font><font face="Times New Roman, serif">
                          ) </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4,  paddingLeft: 10}}></span></font><font face="Times New Roman, serif">
                          Token OTP</font> (<font face="Times New Roman, serif"><span lang="vi-VN">Loại…</span></font><font face="Times New Roman, serif">…</font><font face="Times New Roman, serif"><span lang="vi-VN">……</span></font><font face="Times New Roman, serif">)
                        </font></font></font>
                  </p>
                  <p lang="en-US" className="western" align="left" style={{marginRight: '-0.09in', textIndent: '0in', marginTop: '0.03in', marginBottom: '0.03in'}}>
                    <font size={2} style={{fontSize: '11pt'}}><span lang="en-US">Số
                        ĐT nhận mã xác thực</span></font><font size={2} style={{fontSize: '11pt'}}><span lang="vi-VN">/kích
                        hoạt</span></font><font size={2} style={{fontSize: '11pt'}}><span lang="en-US">:</span></font><font size={2} style={{fontSize: '9pt'}}><span lang="en-US"><span className="url-parameter"><span className="url-container"> {data.CellphoneOTP}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………………………………………………………………………………………………………...……..…</span></font>
                  </p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><b>4.
                            Đăng ký </b></font><font face="Times New Roman, serif"><span lang="vi-VN"><b>dịch
                              vụ </b></span></font><font face="Times New Roman, serif"><b>nhờ
                            thu tự động: </b></font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>
                          </font></font><font face="Webdings, fantasy"><span lang="fr-FR" style={{ paddingLeft: 5, paddingRight: 4}}></span></font><font face="Times New Roman, serif">
                          Nước </font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>
                          </font></font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 5}}></span></font><font face="Times New Roman, serif">
                          Điện  </font><font face="Times New Roman, serif"><font size={2} style={{fontSize: '10pt'}}>
                          </font></font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 10}}></span></font><font face="Times New Roman, serif">
                          Viễn thông </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 7}}></span></font><font face="Times New Roman, serif">
                          Học phí</font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 5}}></span></font><font face="Times New Roman, serif">
                          Bảo hiểm chủ thẻ   </font><font face="Webdings, fantasy"><span lang="fr-FR " style={{paddingRight : 4, paddingLeft: 15}}></span></font><font face="Times New Roman, serif">.…....</font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Tên
                          chủ HĐ/thuê bao&nbsp;:<span className="url-parameter"><span title={data.ServiceUserName} className="url-email hidden-info"> {data.ServiceUserName}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……………..…………Mã
                          KH/Mã HĐ/Số thuê bao:<span className="url-parameter"><span className="url-container"> {data.ServiceuserCode}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…………………Ngày
                          hiệu lực:<span className="url-parameter"><span className="url-container"> {data.Date}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………..…….</font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Times New Roman, serif"><font size={2} style={{fontSize: '11pt'}}>Tên
                        chủ HĐ/thuê bao&nbsp;:<span className="url-parameter"><span title={data.ServiceUserName} className="url-email hidden-info"> {data.ServiceUserName}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……………..…………Mã
                        KH/Mã HĐ/Số thuê bao:<span className="url-parameter"><span className="url-container"> {data.ServiceuserCode}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…………………Ngày
                        hiệu lực:<span className="url-parameter"><span className="url-container"> {data.Date}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………..…….</font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif">Tên
                          chủ HĐ/thuê bao&nbsp;:<span className="url-parameter"><span  title={data.ServiceUserName} className="url-email hidden-info"> {data.ServiceUserName}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……………..…………Mã
                          KH/Mã HĐ/Số thuê bao:<span className="url-parameter"><span className="url-container"> {data.ServiceuserCode}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…………………Ngày
                          hiệu lực:<span className="url-parameter"><span className="url-container"> {data.Date}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………..…….</font></font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in', marginBottom: '0.04in'}}>
                    <font face="Times New Roman, serif"><font size={2} style={{fontSize: '11pt'}}>Tên
                        chủ HĐ/thuê bao&nbsp;:<span className="url-parameter"><span title={data.ServiceUserName} className="url-email hidden-info"> {data.ServiceUserName}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>……………..…………Mã
                        KH/Mã HĐ/Số thuê bao:<span className="url-parameter"><span className="url-container"> {data.ServiceuserCode}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>…………………Ngày
                        hiệu lực:<span className="url-parameter"><span className="url-container"> {data.Date}</span><font face="Times New Roman, serif" className="url-parameter"><font size={2} style={{fontSize: '10pt'}} className="fs1"></font></font></span>………..…….</font></font></p>
                  <p align="left" style={{textIndent: '0in', marginTop: '0.04in'}}><font face="Calibri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><b>5.
                          </b></font><font face="Times New Roman, serif"><b>Đăng
                            ký phát hành thẻ ghi nợ và
                            dịch vụ thẻ (đối với TKTT là
                            VND)       </b></font></font></font>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="western" align="left" style={{textIndent: '0in', marginTop: '0.19in', marginBottom: '0.19in'}}>
            <br />
            <br />
          </p>
        </div>
        


        </div>
      </div>
      
    </Bound>
  );
}
// http://localhost:3000/?cif=124443123&username=Nguy%E1%BB%85n%20V%C4%83n%20A&branch=Vo%20V%C4%83n%20T%E1%BA%A7n&occupation=admin&position=intern&tax=12306434&dateofbirth=12/12/2009&contractNum=23456787&tax=23542355&nationality=Viet%20Nam&nation=Kinh&religion=kh%C3%B4ng&idencard=292837577&tax=234534322&idate=09/08/2010&iplace=Ho%20Chi%20Minh&birthCer=272930211&dateOfIssue=09/09/1999&placeOfIssue=Da%20Nang&phone=0989233498&fax=3455411219&email=werytesting@gmail.com&passport=2344478643&userAddress=36%20Bui%20Thi%20Xuan%20District%201,%20Ho%20Chi%20Minh%20city&curAdd=108%20Nguyen%20Thi%20Minh%20Khai%20District%201%20Ho%20Chi%20Minh%20city&spouse=Nguyen%20Duong%20Van&spousecard=29293456211&sdate=29/11/2016&sPlace=%C4%90%C3%A0%20N%E1%BA%B5ng&name=Nguyen%20Thi%20Thu%20Th%E1%BB%A7y&oBirth=29/3/2009&oNationality=Vi%E1%BB%87t%20Nam&oNat=Kinh&oRel=Kh%C3%B4ng&oIden=272673899&oDate=20/09/2019&oPlace=%C4%90%E1%BB%93ng%20Nai&oAdd=146/23%20Nguyen%20Thien%20Thu%E1%BA%ADt%20qu%E1%BA%ADn%203%20TPHCM&oCurAdd=146/32%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Minh%20Khai%20ph%C6%B0%E1%BB%9Dng%203,%20qu%E1%BA%ADn%201,%20TPHCM&oPas=2030449403&organization=WHO%20-Vietnam%20communication%20health%20Organization&legalRe=Nguy%E1%BB%85n%20Th%E1%BB%8B%20Kim&oPhone=0981237788&oFax=23344133009&oMail=erty@gmail.com&business=Kinh%20Doanh&location=23%20Cach%20M%E1%BA%A1ng%20Th%C3%A1ng%208,%20ph%C6%B0%E1%BB%9Dng%2011,%20qu%E1%BA%ADn%2010,%20TPHCM&head=112%20Tr%E1%BA%A7n%20Th%E1%BB%8B%20Ngh%E1%BB%89%20qu%E1%BA%ADn%201,%20TPHCM&contract=230931187&sms=0988122976&eBank=0933988919&plus=0932011334&cellOTP=0988222176&serviceUser=Nguyen%20Thi%20Hong%20Anh&serviceCode=2339897711&valDate=23/09/2020