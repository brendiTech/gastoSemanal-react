import React, {Component} from 'react';
import Gasto from './Gasto';

class Listado extends Component {

    render(){
        return(
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {console.log(this.props.gastos)}
                {Object.keys(this.props.gastos).map(key=>(
                    <Gasto
                    gasto={this.props.gastos[key]}
                    />
                ))}
            </div>
        )
    }

}

export default Listado;