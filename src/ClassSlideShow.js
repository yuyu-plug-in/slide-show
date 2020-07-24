import {getType} from './methods/getType.js'
import {container} from './createDom/container.js'

export class slideShow {
    /**
     *
     * @param option       obj
     * @param option.el    (element)操作元素
     * @param option.mode  (animation)动画模式
     */
    constructor(option = {}) {
        this.el = option.el !== undefined ? option.el :
            (arguments && typeof arguments[0] === "object") ? arguments[0] :
                console.error("The parameter you passed in is a " + getType(arguments[0]) + " type and does not match, not an HTMLDivElement type :你传入的参数是" + getType(arguments[0]) + "类型，不符合HTMLDivElement类型");
        this.mode = option.mode === 'fade' ? 'fade' : 'animation';

    }

    init() {

    }
}
