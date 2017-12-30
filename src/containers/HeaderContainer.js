import {connect} from 'react-redux'
import {toggleAboutDrawer} from '../actions'
import Header from '../components/Header.js'

const mapDispatchToProps = (dispatch)=> ({
   toggleAboutDrawer: () => dispatch(toggleAboutDrawer())
})

const HeaderContainer = connect(null, mapDispatchToProps)(Header)

export default HeaderContainer
