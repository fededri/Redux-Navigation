import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate, employeeFormReset} from '../actions';
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component {


   componentWillMount(){
    this.props.employeeFormReset();
   }



    onButtonPress(){
        const{name,phone,shift} = this.props;
        this.props.employeeCreate({name,phone,shift});
    }


    render(){
        
        return (
            <Card>
               <EmployeeForm {...this.props} />

                <CardSection>
                    <Button
                    onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>

            </Card>
        );
    }

};




const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {
        
        name,phone,shift
    };
}

export default connect(mapStateToProps,
    {
        employeeUpdate,
        employeeCreate,
        employeeFormReset
    }
    )(EmployeeCreate);