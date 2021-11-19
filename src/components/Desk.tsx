import React from 'react';
import { Task } from './Task';
import { ITaskList } from './Interface'; 


export default class Desk extends React.Component<{shouldSaveInLocalStorage},ITaskList> {

    constructor(props) {
        super(props),
        this.state = {
            tasks: [],
            currentValue: '',
        };

        this.onHandleChange = this.onHandleChange.bind(this);

    };

    onHandleChange(e) {
        this.setState({ currentValue: e.target.value});
    }


    addTask(currentValue) {

        const tasks = this.state.tasks;
        if (tasks === undefined) {
            this.setState({ tasks: [currentValue] })
        } else {
            const tasksCopy = [{ text: currentValue as string }, ...this.state.tasks];
            this.setState({ tasks: tasksCopy })
        };

        this.setState({ currentValue: '' })
        
    };

    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem('tasks')));
    };


    componentWillUnmount(){
        if (this.props.shouldSaveInLocalStorage) {
            localStorage.setItem('tasks', JSON.stringify({tasks: this.state.tasks}))
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.shouldSaveInLocalStorage != this.props.shouldSaveInLocalStorage) {
            return false;
        }
        
        return true;
    }


    removeTask(index: number) {
        const tasks = this.state.tasks;
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        this.setState({ tasks: tasksCopy })        
    };

    render() {

        return (
            <div>
                <form>
                    <input type='text' value={this.state.currentValue} onChange={this.onHandleChange}></input>
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.addTask(this.state.currentValue);
                    }}>add</button>
                </form>
                <ul>
                    {this.state.tasks.map((task, id) => <Task key={id} id={id} text={task.text} onRemove={() => this.removeTask(id)}/>)}
                </ul>
            </div>
            

        )
    }
    
} 