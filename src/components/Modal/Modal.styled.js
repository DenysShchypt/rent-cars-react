import styled from 'styled-components';

export const StyleModal = styled.div`
position:fixed;
top: 0;
right:0;
bottom: 0;
left: 0;
background: rgba(18, 20, 23, 0.5);

.modal{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    border-radius: 24px;
    width: 541px;
    background: #fff;
    
    padding: 20px;
    max-width: 450px;
    width: 100%;
    min-height: 450px;
    &:hover {
      cursor: auto;
    }

}
.closeModalBtn{
position: absolute;
top: 16px;
right: 16px;
}
.ModalImg{
border-radius: 14px;
width: 461px;
height: 248px;
background: #f3f3f2;
}
.aboutModel{
margin-bottom: 24px;
}

.titleDescription{
display: flex;
margin-right:auto;
margin-bottom: 8px;
align-items: baseline;
}
.titleCar{
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.33333;
color: #121417;
}
.modelColor{
color: #3470ff;
}
.carFeatures{
display: flex;
flex-wrap: wrap;
 margin-bottom: 14px;
}
.carText{
margin-right: 12px;
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);
}
.description{
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.42857;
color: #121417;
}
.componentBox{
margin-bottom: 24px;
}
.componentTitle{
margin-bottom: 8px;
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.42857;
color: #121417;
}
.accessory{
margin: 4px 12px 0 0;
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);
}
.conditionBox{
display: flex;
flex-wrap: wrap;
}
.conditions{
padding: 7px 14px;
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 1.5;
color: #363535;
}
.conditionValue{
font-weight: 600;
color: #3470ff;
}

.functionality{
margin: 0px 12px 0px 0px;
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);
}
.modalBtn{
border:none;
border-radius: 12px;
padding: 12px 50px;
width: 168px;
height: 44px;
background: #3470ff;

cursor: pointer;
}
.modalBtnText{
font-family: "Manrope", sans-serif;
font-weight: 600;
font-size: 12px;
line-height: 1.42857;
color: #fff;
text-decoration: none;
}
`