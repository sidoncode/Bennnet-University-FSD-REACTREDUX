import {connnect} from 'react-redux'
import {setVisibility} from '../actions'
import Link  from './Component/Link'


const mapStateToProps = (state,ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})



const mapDispatchToProps = (state,ownProps) => ({
    onClick: () dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    
    mapStateToProps,
    mapDispatchToProps
)(Link)

