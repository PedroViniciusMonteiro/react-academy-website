import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <img className='values__image' src={Image} alt=" Woman " />
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values"></SectionHead>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum voluptates repudiandae?</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=> {
                            return <Card key={id}className="values__value" >
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values