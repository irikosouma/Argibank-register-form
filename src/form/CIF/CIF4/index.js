import React, {useEffect, useState} from 'react'
import { Bound } from './index.styles';
//styles
// import "./css/main.css"
// function getUrl() {
//   var url_string = "http://127.0.0.1:5500/M%E1%BA%ABu%20CIF%20v%C3%A0%20m%E1%BB%9F%20t%C3%A0i%20kho%E1%BA%A3n%20ph%C3%A1t%20h%C3%A0nh%20th%E1%BA%BB_4.html?a=1&b=3&c=02/08/2020";
//   var url = new URL(url_string);
//   var c = url.searchParams.get("c");

//   document.getElementById("url-cif").innerHTML = c;

// }
const mockData = [
  {
    Date: "02/08/2020",
   
  }
]
export default function CIF4() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var date = url.searchParams.get("date");
    setData({ ...data, Date: date});
    return () => {
     
    }
  }, [])
  return (
   <Bound>
      
    <div type="HEADER">
      {/* <p lang="en-US" align="CENTER" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0.19in'}}>
        <sdfield type="PAGE" subtype="RANDOM" format="PAGE" />
        </p>
      <p lang="en-US" align="LEFT" style={{textIndent: '0in', marginTop: '0.19in', marginBottom: '0in'}}>
        <br /><br />
      </p> */}
    </div>
    <p lang="it-IT" className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0.19in'}}>
      <font face="Times New Roman, serif"><font size={3}>Hai Bên thỏa
          thuận ký kết Hợp đồng phát hành và sử dụng thẻ ghi
          nợ với các điều kiện, điều khoản sau:</font></font></p>
    <ol>
      <p value={1}><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Times New Roman, serif"><font size={3}><b>Điều 1. Giải thích
                thuật ngữ</b></font></font></p>
      </p></ol>
    <p className="western" align="JUSTIFY" style={{marginLeft: '0.7in', textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
      <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}> Trong
              hợp đồng này, các từ ngữ dưới đây được hiểu như
              sau:</font></font></font></font></p>
    <ol>
      <p value={1}><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">1. Thẻ
                    ngân hàng: Là phương tiện thanh toán do tổ chức phát
                    hành thẻ phát hành để thực hiện giao dịch thẻ theo
                    các điều kiện, điều khoản được các Bên thỏa
                    thuận.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">2. Thẻ
                    ghi nợ: Là thẻ cho phép chủ thẻ thực hiện giao dịch
                    trong phạm vi số tiền và/hoặc hạn mức thấu chi trên
                    tài khoản thanh toán của chủ thẻ mở tại Agribank.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">3. Chủ
                    thẻ: Là cá nhân được Agribank phát hành thẻ để sử
                    dụng, bao gồm chủ thẻ chính và chủ thẻ phụ.</span></font></font></font></font></p>
      </p></ol>
    <ol>
      <p><p lang="vi-VN" className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Times New Roman, serif"><font size={3}>a) Chủ thẻ chính:
              Là cá nhân đứng tên ký Hợp đồng phát hành và sử
              dụng thẻ với Agribank.</font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">b) Chủ
                    thẻ phụ: Là cá nhân được chủ thẻ chính cho phép sử
                    dụng thẻ và được chủ thẻ chính cam kết bằng văn
                    bản thực hiện toàn bộ các nghĩa vụ phát sinh pên
                    quan đến việc sử dụng thẻ theo Hợp đồng phát hành
                    và sử dụng thẻ.</span></font></font></font></font></p>
      </p></ol>
    <ol start={4}>
      <p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">4. Tổ
                    chức thẻ quốc tế (TCTQT): Là tổ chức được thành
                    lập ở nước ngoài theo quy định của pháp luật nước
                    ngoài, có thỏa thuận với Tổ chức phát hành thẻ, Tổ
                    chức thanh toán thẻ và các bên pên quan khác để hợp
                    tác phát hành, thanh toán thẻ quốc tế phù hợp với quy
                    định của pháp luật Việt Nam và cam kết quốc tế.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">5. Tổ
                    chức phát hành thẻ (TCPHT): Là thành viên chính thức
                    hoặc pên kết của tổ chức thẻ trong nước, quốc tế
                    thực hiện nghiệp vụ phát hành thẻ.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">6. Tổ
                    chức thanh toán thẻ (TCTTT): Là thành viên chính thức
                    hoặc pên kết của tổ chức thẻ trong nước, quốc tế
                    thực hiện nghiệp vụ thanh toán thẻ.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">7. Đơn
                    vị chấp nhận thẻ (ĐVCNT): Là tổ chức hoặc cá nhân
                    chấp nhận thanh toán hàng hóa, dịch vụ bằng thẻ theo
                    hợp đồng thanh toán thẻ ký kết với các Tổ chức
                    thanh toán thẻ.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">8. Mã
                    số xác định chủ thẻ (mã PIN): Là mã số mật của cá
                    nhân được Agribank cấp cho chủ thẻ lần đầu và sau
                    đó chủ thẻ thay đổi theo quy trình được xác định
                    để sử dụng trong các giao dịch thẻ nhằm xác thực
                    chủ thẻ. Trong các giao dịch thẻ có sử dụng mã PIN,
                    mã PIN được coi là chữ ký của chủ thẻ và chủ thẻ
                    có trách nhiệm bảo mật.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">9. OTP
                    (One Time Password): Là mật khẩu sử dụng một lần trong
                    một khoảng thời gian nhất định, có thể tùy biến do
                    Agribank cấp cho chủ thẻ qua các phương tiện khác nhau
                    như Website, thư điện tử, điện thoại di động và các
                    thiết bị cung cấp mật khẩu chuyên dùng khác khi thanh
                    toán trực tuyến.</span></font></font></font></font></p>
      </p><p><p lang="vi-VN" className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Times New Roman, serif"><font size={3}>10. Thời hạn hiệu
              lực của thẻ: Là khoảng thời gian chủ thẻ được
              phép sử dụng thẻ theo quy định của Agribank.</font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">11. Giao
                    dịch thẻ: Là việc sử dụng thẻ để gửi, rút tiền
                    mặt, chuyển khoản, thanh toán hàng hóa, dịch vụ và sử
                    dụng các dịch vụ khác do Agribank và các Tổ chức thanh
                    toán thẻ khác cung ứng.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">12. Hoá
                    đơn giao dịch: Là chứng từ xác nhận giao dịch hoàn
                  </span></font></font><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">thành</span></font></font><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">
                    do chủ thẻ thực hiện bằng thẻ. </span></font></font></font></font>
        </p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">13. Máy
                    giao dịch tự động (ATM/CDM): Là thiết bị được ngân
                    hàng sử dụng để cung cấp cho khách hàng một số dịch
                    vụ ngân hàng tự động, bao gồm nhưng không giới hạn
                    các dịch vụ, như: Rút/gửi tiền, chuyển khoản, thanh
                    toán hóa đơn, v.v...</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">14. Thiết
                    bị thanh toán thẻ tại điểm bán (POS, mPOS, v.v...): Là
                    các loại thiết bị đọc thẻ, thiết bị đầu cuối
                    được cài đặt và sử dụng tại ĐVCNT/chi nhánh, phòng
                    giao dịch của ngân hàng mà chủ thẻ có thể sử dụng
                    thẻ để thanh toán hàng hóa, dịch vụ hoặc rút/ứng
                    tiền mặt và các dịch vụ khác do ngân hàng cung cấp.</span></font></font></font></font></p>
      </p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">15. Sự
                    kiện bất khả kháng: Là sự kiện do nguyên nhân khách
                    quan gây ra vượt quá khả năng kiểm soát của các Bên
                    tham gia Hợp đồng, như: Chiến tranh, nổi loạn, khủng
                    bố, hỏa hoạn, lũ lụt, cháy nổ, thiên tai, bạo động,
                    v.v…</span></font></font></font></font></p>
      </p></ol>
    <ol start={2}>
      <p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Times New Roman, serif"><font size={3}><b>Điều 2. Nội dung hợp
                đồng</b></font></font></p>
      </p></ol>
    <ol>
      <p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
          <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">1. Bên
                    A cung cấp cho Bên B dịch vụ thẻ ghi nợ theo đề nghị
                    của Bên B tại Giấy đề nghị phát hành thẻ ghi nợ
                    ngày<span className="url-parameter"><span className="url-container ff3"> {data.Date}</span><span className="dot1"></span></span>....</span></font></font><font face="Times New Roman, serif"><font size={3}>....</font></font><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">..</span></font></font><font face="Times New Roman, serif"><font size={3} /></font><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">.......</span></font></font><font face="Times New Roman, serif"><font size="3</FONT" /><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN" /></font></font><font face="Times New Roman, serif"><font size={3}>……..</font></font><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">.....</span></font></font></font></font></font></p><font face="Capbri, sans-serif">
        </font></p><p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}><font face="Capbri, sans-serif">
            <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN">2. Bên
                      B phải thanh toán cho Bên A các loại phí, lãi pên quan
                      đến việc sử dụng thẻ theo Biểu phí dịch vụ thẻ
                      hiện hành của Agribank và được thông báo trên Website
                      (<a href="http://www.agribank.com.vn/">www.agribank.com.vn</a>) hoặc
                      qua các kênh thông tin khác của Agribank ít nhất 07 (bảy)
                      ngày trước khi có sự thay đổi.</span></font></font></font></font></font></p><font face="Capbri, sans-serif">
        </font></p></ol><font face="Capbri, sans-serif">
      <ol start={3}>
        <p><p className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
            <font face="Capbri, sans-serif"><font size={2} style={{fontSize: '11pt'}}><font face="Times New Roman, serif"><font size={3}><span lang="vi-VN"><b>Điều 3. Thẻ
                        chính, thẻ phụ thẻ ghi nợ quốc tế</b></span></font></font></font></font></p>
        </p></ol>
      <ol>
        <p><p lang="vi-VN" className="western" align="JUSTIFY" style={{textIndent: '0in', marginTop: '0in', marginBottom: '0in'}}>
            <font face="Times New Roman, serif"><font size={3}>1. Bên B có quyền
                yêu cầu Bên A phát hành thẻ phụ. Bên B và chủ thẻ
                phụ sẽ sử dụng cùng một tài khoản.</font></font></p>
        </p></ol>
    </font>
  
      
   </Bound>
    
  )
}
// http://localhost:3000/?date=09/08/2020
