import SimpleReducer from './components/6.1-simple-reducer'
import ReducerWithContext from './components/6.2-reducer-with-context'
import ReducerWithUseEffect from './components/6.3-reducer-with-useeffect'

export default function UseReducer() {
    return (
        <div>
            <SimpleReducer />
            <h2>Reducer with Context</h2>
            <ReducerWithContext />
            <h2>Reducer with UseEffect</h2>
            <ReducerWithUseEffect />
        </div>
    )
}
