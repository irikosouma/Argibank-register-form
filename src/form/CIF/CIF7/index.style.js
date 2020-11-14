
import styled from 'styled-components';
const Bound = styled.div`
@page { margin-right: 0.3in; margin-top: 0in; margin-bottom: 0.2in }
		P { text-indent: 0.5in; margin-top: 0.08in; margin-bottom: 0.08in; direction: ltr; color: #000000; text-align: justify; widows: 2; orphans: 2 }
		P.western { font-family: "Times New Roman", serif; font-size: 12pt; }
		P.cjk { font-family: "Times New Roman", serif; font-size: 12pt }
		P.ctl { font-family: "Times New Roman", serif; font-size: 10pt; so-language: ar-SA }
		A:link { color: #0000ff }

		/* .marg */
.condition-style {
	padding-left: 8px;
}
/* .table-style {
	display:inline-flex
;
} */
.table-border {
	border: 1px solid #f2f2f2;

		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content:center;	 */
	/* display: flex;
	flex-direction: column; */
	/* justify-content: center; */
	/* .signature {
		display: flex;
		flex-direction: column;
		justify-content: center;
	} */

}
.signature {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
 export {Bound};