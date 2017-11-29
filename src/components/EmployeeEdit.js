import React, {Component} from 'react';
import {Card,CardSection,Button,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave,employeeDelete} from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount(){
        //this will cause that phone, shift and name of the employee were updated on the
        //current employeeForm state, so mapStateToProps will be called and the component
        //will receive the corresponding props.
        _.each(this.props.employee,(value,prop) =>{
            this.props.employeeUpdate({prop,value});
        });
    }


    onButtonPress(){
        const {name, phone,shift} = this.props;
        console.log(name,phone,shift);
        this.props.employeeSave({name,phone,shift, uid: this.props.employee.uid })
    }


    onTextPress(){
        const {phone,shift} = this.props;
        Communications.text(phone,`Your upcoming shift is on ${shift}`);

    }

    onDecline(){
        this.setState({showModal: false})
    }


    onAccept(){
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    render(){
        return(
            <Card>
                <EmployeeForm {...this.props} />


                <CardSection>
                    <Button
                    onPress={this.onButtonPress.bind(this)}
                    >
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                    onPress={this.onTextPress.bind(this)}
                    >
                        Text Schedule
                    </Button>
                </CardSection>

            <CardSection>
                <Button onPress={()=> this.setState({showModal: !this.state.showModal})}>
                    Fire Employee
                </Button>
            </CardSection>

            <Confirm
            onAccept={this.onAccept.bind(this)}
            onDecline={ this.onDecline.bind(this)}
            visible = {this.state.showModal}
            >
            Are you sure you want to delete this? 
            </Confirm>

            </Card>

        );
    }
}


const mapStateToProps  = (state) => {
    const {name,phone,shift} = state.employeeForm;
    console.log(`employee edit state: ${state.employeeForm}`);
    return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);