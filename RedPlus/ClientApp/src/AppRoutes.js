import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

// React Fundamentals 2023
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
import EntryIndex from './components/Entries/EntryIndex';
import EntryCreate from './components/Entries/EntryCreate';
import EntryDetails from './components/Entries/EntryDetails';
import EntryEdit from './components/Entries/EntryEdit';
import EntryDelete from './components/Entries/EntryDelete';
import EntryList from './components/Entries/EntryList';

// Articles
import ReactRoadMap from './articles/ReactRoadMap';
import MapAndKey from './articles/MapAndKey';
import UseStateDemo from './articles/UseStateDemo';
import CheckBoxWithUseState from './articles/CheckBoxWithUseState';
import { SearchBoxTest } from './articles/SearchBoxTest';

// Books 
import BooksIndex from './components/Books/BooksIndex';
import BooksCreate from './components/Books/BooksCreate';
import BooksEdit from './components/Books/BooksEdit';
import BooksDelete from './components/Books/BooksDelete';

// Pager 
import { PagerComponent1 } from './components/Pager/PagerComponent1';
import { PagerComponent2 } from './components/Pager/PagerComponent2';
import { PagerComponent3 } from './components/Pager/PagerComponent3';
import { PagerComponent4 } from './components/Pager/PagerComponent4';
import { PagerComponent5 } from './components/Pager/PagerComponent5';
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

    //{/* Entries */ }
    {
        path: '/Entries',
        element: <EntryIndex />
    },
    {
        path: '/Entries/Index',
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
    },

    //{/* Articles */ }
    {
        path: '/Articles/ReactRoadMap',
        element: <ReactRoadMap />
    },
    {
        path: '/Articles/MapAndKey',
        element: <MapAndKey />
    },
    {
        path: '/Articles/UseStateDemo',
        element: <UseStateDemo />
    },
    {
        path: '/Articles/CheckBoxWithUseState',
        element: <CheckBoxWithUseState />
    },
    {
        path: '/Articles/SearchBoxTest',
        element: <SearchBoxTest />
    },

    //{/* React Part 1 */}
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/UseEffectFetchApi',
        element: <UseEffectFetchApi />
    },
    {
        path: '/FunctionStateDemo',
        element: <FunctionStateDemo />
    },
    {
        path: '/UseEffectDemo',
        element: <UseEffectDemo />
    },
    {
        path: '/hellocomponent',
        element: <HelloComponent />
    },
    {
        path: '/StyleAttribute',
        element: <StyleAttribute />
    },
    {
        path: '/ClassNameDemo',
        element: <ClassNameDemo />
    },
    {
        path: '/MyComponent',
        element: <MyComponent />
    },
    {
        path: '/PropsDemo',
        element: <PropsDemo />
    },
    {
        path: '/Demos/PropsFunctionDemo',
        element: <PropsFunctionDemo />
    },
    {
        path: '/PropsChildrenDemo',
        element: <PropsChildrenDemo />
    },
    {
        path: '/PropsTypesDemo',
        element: <PropsTypesDemo />
    },
    {
        path: '/DestructuringAssignmentDemo',
        element: <DestructuringAssignmentDemo />
    },
    {
        path: '/StateDemo',
        element: <StateDemo />
    },
    {
        path: '/StateDescription',
        element: <StateDescription />
    },
    {
        path: '/StateObjectLiteral',
        element: <StateObjectLiteral />
    },
    {
        path: '/OnClickDemo',
        element: <OnClickDemo />
    },
    {
        path: '/OnClickEventHandler',
        element: <OnClickEventHandler />
    },
    {
        path: '/Ideas',
        element: <Ideas />
    },
    {
        path: '/InlineStyle',
        element: <InlineStyle />
    },
    {
        path: '/TodoListInMemory',
        element: <TodoListInMemory />
    },
    {
        path: '/OneWayBinding',
        element: <OneWayBinding />
    },
    {
        path: '/MapFunctionDemo',
        element: <MapFunctionDemo />
    },
    {
        path: '/MapFunctionBookList',
        element: <MapFunctionBookList />
    },
    {
        path: '/FetchApiPractice',
        element: <FetchApiPractice />
    },
    {
        path: '/TextBoxOnChangeEventHandler',
        element: <TextBoxOnChangeEventHandler />
    },
    {
        path: '/ReactFragmentDemo',
        element: <ReactFragmentDemo />
    },

    //{/* Books */}
    {
        path: '/Books',
        element: <BooksIndex />
    },
    {
        path: '/Books/Index',
        element: <BooksIndex />
    },
    {
        path: '/Books/Create',
        element: <BooksCreate />
    },
    {
        path: '/Books/Edit/:id',
        element: <BooksEdit />
    },
    {
        path: '/Books/Delete/:id',
        element: <BooksDelete />
    },

    //{/* Pager */}
    {
        path: '/pager1',
        element: <PagerComponent1 />
    },
    {
        path: '/pager2',
        element: <PagerComponent2 />
    },
    {
        path: '/pager3',
        element: <PagerComponent3 />
    },
    {
        path: '/pager4',
        element: <PagerComponent4 />
    },
    {
        path: '/pager5',
        element: <PagerComponent5 />
    },
    {
        path: '/pager6',
        element: <PagerComponent6 />
    },
    {
        path: '/pager7',
        element: <PagerComponent7 />
    },
    {
        path: '/pager',
        element: <PagerComponent />
    }
];

export default AppRoutes;
