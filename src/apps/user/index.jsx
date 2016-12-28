//https://zhuanlan.zhihu.com/p/21490605
//模块 index 就是负责维护模块的公共 API。这是模块和模块之间相互进行交互而暴露的地方。
import * as actions from './actions';
import * as components from './components';
import * as constants from './constants';
import reducer from './reducer';
import * as selectors from './selectors';

export default { actions, components, constants, reducer, selectors };
