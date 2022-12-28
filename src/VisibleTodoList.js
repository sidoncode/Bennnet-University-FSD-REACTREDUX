import {connect} from 'react-redux';
import {toggleTodo} from '../actions'
import TodosList from './TodosList';
import {VisibilityFilters} from '../actions'

const getVisibilityTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t =>!t.completed)
        default:
            throw new Error('Unknown visibility filter' + filter);
    }
}

const mapStateToProps = (state,ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (state,ownProps) => ({
    onClick: () dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList)