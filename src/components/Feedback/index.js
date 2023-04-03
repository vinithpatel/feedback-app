import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  render() {
    const {resources} = this.props
    const {isFeedbackSubmitted} = this.state

    return (
      <div className="bg-container">
        <h1>Content</h1>
      </div>
    )
  }
}

export default Feedback
