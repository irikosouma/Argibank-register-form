import styled from 'styled-components';
const Bound = styled.div`
width: 595px;
	@page { margin-right: 0.3in; margin-top: 0.2in; margin-bottom: 0.2in }
		P { text-indent: 0.5in; margin-top: 0.08in; margin-bottom: 0.08in; direction: ltr; color: #000000; text-align: justify; widows: 2; orphans: 2 }
		P.western { font-family: "Times New Roman", serif; font-size: 12pt; so-language: en-US }
		P.cjk { font-family: "Times New Roman", serif; font-size: 12pt }
		P.ctl { font-family: "Times New Roman", serif; font-size: 10pt; so-language: ar-SA }
		A:link { color: #0000ff }
		.url-parameter {
 
 position: relative;
 /* top: 10px; */
}
.url-parameter .url-container {
 position: absolute;
 left: 30px;
 top: -1;
 margin: 0;
 padding: 0;
 bottom: 2px;
}
.url-parameter .fs1 {
 position: absolute;
 left: 0;
 top: 0;

}
`;
export {Bound};