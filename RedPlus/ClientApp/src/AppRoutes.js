import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

// React Fundamentals 2022
import { About } from './components/About';
import { Contact } from './components/Contact';
import { HelloComponent } from './components/Demos/HelloComponent';
import { StyleAttribute } from './components/Demos/StyleAttribute';
import { ClassNameDemo } from './components/Demos/ClassNameDemo/ClassNameDemo';
import MyComponent from './components/Demos/MyComponent';
import { PropsDemo } from './components/Demos/PropsDemo/PropsDemo';
import { PropsChildrenDemo } from './components/Demos/PropsChildrenDemo/PropsChildrenDemo';
import { DestructuringAssignmentDemo } from './components/Demos/DestructuringAssignmentDemo/DestructuringAssignmentDemo';
import { StateDemo } from './components/Demos/StateDemo/StateDemo';
import { StateObjectLiteral } from './components/Demos/StateObjectLiteral/StateObjectLiteral';
import { OnClickDemo } from './components/Demos/OnClickDemo/OnClickDemo';
import Ideas from './components/Ideas/Ideas';
import InlineStyle from './components/Demos/InlineStyles/InlineStyles';
import { OneWayBinding } from './components/Demos/OneWayBinding/OneWayBinding';
import { MapFunctionDemo } from './components/Demos/MapFunctionDemo/MapFunctionDemo';
import { MapFunctionBookList } from './components/Demos/MapFunctionBookList/MapFunctionBookList';
import StateDescription from './components/Demos/StateDescription/StateDescription';
import OnClickEventHandler from './components/Samples/OnClickEventHandler';
import FetchApiPractice from './components/Samples/FetchApiPractice';
import TextBoxOnChangeEventHandler from './components/Samples/TextBoxOnChangeEventHandler';
import ReactFragmentDemo from './components/Samples/ReactFragmentDemo';
import FunctionStateDemo from './components/Samples/FunctionStateDemo';
import UseEffectDemo from './components/Samples/UseEffectDemo';
import UseEffectFetchApi from './components/Samples/UseEffectFetchApi';
import TodoListInMemory from './components/TodoListInMemory';
import { PropsTypesDemo } from './components/Demos/PropsTypesDemo/PropsTypesDemo';

// Entries
import { EntryIndex } from './components/Entries/EntryIndex';
import { EntryCreate } from './components/Entries/EntryCreate';
import { EntryDetails } from './components/Entries/EntryDetails';
import { EntryEdit } from './components/Entries/EntryEdit';
import { EntryDelete } from './components/Entries/EntryDelete';
import { EntryList } from './components/Entries/EntryList';

// Articles
import ReactRoadMap from './articles/ReactRoadMap';
import MapAndKey from './articles/MapAndKey';
import CheckBoxWithUseState from './articles/CheckBoxWithUseState';
import { SearchBoxTest } from './articles/SearchBoxTest';

// Books 
import { BooksIndex } from './components/Books/BooksIndex';
import { BooksCreate } from './components/Books/BooksCreate';
import { BooksEdit } from './components/Books/BooksEdit';
import { BooksDelete } from './components/Books/BooksDelete';

// Pager 
import { PagerComponent1 } from './components/Pager/PagerComponent1';
import { PagerComponent2 } from './components/Pager/PagerComponent2';
import { PagerComponent3 } from './components/Pager/PagerComponent3';
import { PagerComponent4 } from './components/Pager/PagerComponent4';
import { PagerComponent6 } from './components/Pager/PagerComponent6';
import { PagerComponent7 } from './components/Pager/PagerComponent7';
import { PagerComponent } from './components/Pager/PagerComponent';
import { PropsFunctionDemo } from './components/Demos/PropsDemo/PropsFunctionDemo';

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/Entries',
        element: <EntryIndex />
    },
    {
        path: '/Entries/Create',
        element: <EntryCreate />
    },
    {
        path: '/Entries/Details/:id',
        element: <EntryDetails />
    },
    {
        path: '/Entries/Edit/:id',
        element: <EntryEdit />
    },
    {
        path: '/Entries/Delete/:id',
        element: <EntryDelete />
    },
    {
        path: '/Entries/List',
        element: <EntryList />
    }
];

export default AppRoutes;
