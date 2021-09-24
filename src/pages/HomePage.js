import Feed from '../components/Feed.js'
import Header from '../components/Header.js'
import SubscriptionAddModal from '../components/SubscriptionAddModal.js'

export default function HomePage({ $target, initialState, onSubscribe }) {
  const $page = document.createElement('main')
  $page.className = 'home'

  this.state = initialState

  const subscriptionAddModal = new SubscriptionAddModal({
    $target,
    onSubscribe,
  })

  new Header({
    $target,
    onClick: () => {
      subscriptionAddModal.setState({ isOpen: true })
    },
  })

  const feed = new Feed({
    $target: $page,
    initialState: this.state.items,
  })

  this.setState = (nextState) => {
    this.state = nextState
    feed.setState(this.state.items)
  }

  this.render = () => {
    $target.appendChild($page)
  }
}
