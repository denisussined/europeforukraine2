import withTranslation from "../hoc/withTranslation";
import photo from "../icons/photo.jpg"
import shirt from "../icons/shirt2.png"
import food from "../icons/food2.png"
import fuel from "../icons/fuel2.png"
import truck from "../icons/truck2.png"

const Main = (props) => (
    <div className="main">
        <div className="main__item info">
            <div className="info__item">
                <div className="text">
                    {props.t('content.beginning')}
                </div>
            </div>
            <div className="info__item">
                <img className="photo" src={photo} alt=""/>
            </div>
        </div>
        <div className="main__item details">
            <ul className="text">
                <li>{props.t('content.information')}</li>
                <li>{props.t('content.region1')}&nbsp;&nbsp;&nbsp;&nbsp;{props.t('content.region2')}</li>
                <li>{props.t('content.nip1')}&nbsp;&nbsp;&nbsp;&nbsp;{props.t('content.nip2')}</li>
                <li>{props.t('content.krs1')}&nbsp;&nbsp;&nbsp;&nbsp;{props.t('content.krs2')}</li>
            </ul>
        </div>
        <div className="main__item info">
            <div className="info__item">
                <div className="text">
                    {props.t('content.weHave')}
                </div>
            </div>
            <div className="info__item">
                <div className="good">
                    <img className="image" src={shirt} alt=""/>
                    <img className="image" src={food} alt=""/>
                </div>
            </div>
        </div>
        <div className="main__item info">
            <div className="info__item">
                <div className="text">
                    {props.t('content.weNeed')}
                </div>
            </div>
            <div className="info__item info__item_good">
                <div className="good">
                    <img className="image" src={fuel} alt=""/>
                    <img className="image truck" src={truck} alt=""/>
                </div>
            </div>
        </div>
        <div className="main__item details">
            <ul className="text">
                <li>{props.t('content.details')}</li>
                <li>{props.t('content.swift_code_1')}&nbsp;&nbsp;&nbsp;&nbsp;{props.t('content.swift_code_2')}</li>
                <li>{props.t('content.iban_1')}&nbsp;&nbsp;&nbsp;&nbsp;{props.t('content.iban_2')}</li>
            </ul>
        </div>
        <div className="main__item info">
            <div className="text">
                {props.t('content.conclusion')} <strong>{props.t('content.mail')}</strong>.
            </div>
        </div>
    </div>
)

export default withTranslation(Main)