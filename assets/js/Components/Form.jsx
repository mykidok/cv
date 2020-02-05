import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addLine(this.state);
        this.setState({ value: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>$&nbsp;<span className="text-white">What do you want to see ?</span> [education, experiences, interests, languages, personal work, skills]&nbsp;
                    <input autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="type here" value={this.state.value} className="input text-white" style={{ background: 'black', border: 0, borderBottom: '1px solid limegreen' }} type='text' autoFocus={true} onChange={this.handleChange}/>
                </div>
                </form>
        )
    }
}

export default Form