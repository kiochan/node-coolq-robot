"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cq_robot_1 = require("cq-robot");
class App extends cq_robot_1.CQApp {
    constructor() {
        super('com.example.demo', __dirname);
        this.CQ.setDebug(false);
        this.isEnable = true; //注意，只有isEnable为true的插件才会载入，可以将isEnable置为false不载入某插件
    }
    debug() {
        this.privateMsg('test', 1, 10001, '这是一条私聊消息', 1);
        this.groupMsg('test', 1, 10001, 10001, '', '这是一条群消息', 1);
        this.discussMsg('test', 1, 10001, 10001, '这是一条讨论组消息', 1);
    }
    /**
     * 本函数会在连接建立前执行，可以在此执行初始化代码
     *
     * @author CaoMeiYouRen
     * @date 2019-07-15
     * @returns {0}
     * @memberof App
     */
    startup() {
        return 0;
    }
    /**
     *本函数会在连接断开后执行，请在此执行插件退出代码
     *
     * @author CaoMeiYouRen
     * @date 2019-07-15
     * @returns {0}
     * @memberof App
     */
    exit() {
        return 0;
    }
    /**
     * 本函数会在连接建立后立刻执行，可以在此执行初始化代码
     *
     * @author CaoMeiYouRen
     * @date 2019-07-15
     * @returns {0}
     * @memberof App
     */
    enable() {
        return 0;
    }
    /**
     * 本函数会在连接断开前执行，可以在此执行插件退出代码
     *
     * @author CaoMeiYouRen
     * @date 2019-07-15
     * @returns {0}
     * @memberof App
     */
    disable() {
        this.isEnable = false;
        return 0;
    }
    /**
     *
     * Type=21 私聊消息
     * @param {string} subType 消息子类型，friend:来自好友、group:来自群聊、discuss:来自讨论组、other:其他来源
     * @param {number} msgId 消息ID
     * @param {number} fromQQ 来源QQ
     * @param {string} msg 消息内容
     * @param {number} font 字体
     * @returns {number} 返回值*不能*直接返回文本 如果要回复消息，请调用api发送。  * 这里 返回 1 | CQMsg.MSG_INTERCEPT - 截断本条消息，不再继续处理
     * 注意：应用优先级设置为"最高"(10000)时，不得使用本返回值。
     * 如果不回复消息，交由之后的应用/过滤器处理，这里 返回 0 | CQMsg.MSG_IGNORE - 忽略本条消息
     */
    privateMsg(subType, msgId, fromQQ, msg, font) {
        return __awaiter(this, void 0, void 0, function* () {
            this.CQ.sendPrivateMsg(fromQQ, `这是${this.APP_ID}，你发送了：${msg}`);
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    * Type=2 群消息
    * @param {string} subType 消息子类型，normal:正常消息，anonymous:匿名消息，notice:系统提示
    * @param {number} msgId
    * @param {number} fromGroup 来源群号
    * @param {number} fromQQ
    * @param {string} fromAnonymous 来源匿名者
    * @param {string} msg
    * @param {number} font 字体
    * @returns {number} 关于返回值说明, 见 privateMsg 私聊消息 方法
    *
    */
    groupMsg(subType, msgId, fromGroup, fromQQ, fromAnonymous, msg, font) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    * Type=4 讨论组消息
    * @param {string} subType 子类型，目前固定为discuss
    * @param {number} msgId
    * @param {number} fromDiscuss 来源讨论组
    * @param {number} fromQQ
    * @param {string} msg
    * @param {number} font
    * @returns {number}
    *
    */
    discussMsg(subType, msgId, fromDiscuss, fromQQ, msg, font) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.CQ.sendDiscussMsg(fromDiscuss, `这是${this.APP_ID}，你发送了：${msg}`)
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    *
    * Type=11 群文件上传事件
    * @param {string} subType 子类型，目前固定为group_upload
    * @param {number} sendTime 发送时间(时间戳)
    * @param {number} fromGroup 来源群号
    * @param {number} fromQQ 来源QQ号
    * @param {CQFile} file 上传文件的信息
    * @returns {number}
    */
    groupUpload(subType, sendTime, fromGroup, fromQQ, file) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    *Type=101 群事件-管理员变动
    * @param {string} subType 子类型，set:设置管理员,unset:取消管理员
    * @param {number} sendTime 发送时间(时间戳)
    * @param {number} fromGroup 来源群号
    * @param {number} beingOperateQQ 被操作QQ
    * @returns {number}
    *
    */
    groupAdmin(subType, sendTime, fromGroup, beingOperateQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    * Type=102 群事件-群成员减少
    * @param {string} subType 子类型，leave:主动退群、kick:成员被踢、kick_me:登录号被踢
    * @param {number} sendTime
    * @param {number} fromGroup
    * @param {number} fromQQ 操作者QQ(仅子类型为2时存在)
    * @param {number} beingOperateQQ 被操作QQ
    * @returns {number}
    *
    */
    groupDecrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    * Type=103 群事件-群成员增加
    * @param {string} subType 子类型，approve:管理员已同意入群、invite:管理员邀请入群
    * @param {number} sendTime 发送时间(时间戳)
    * @param {number} fromGroup
    * @param {number} fromQQ 操作者QQ(即管理员QQ)
    * @param {number} beingOperateQQ 被操作QQ(即加群的QQ)
    * @returns {number}
    *
    */
    groupIncrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    * Type=201 好友事件-好友已添加
    * @param {string} subType 子类型，目前固定为friend_add
    * @param {number} sendTime 发送时间(时间戳)
    * @param {number} fromQQ 来源QQ
    * @returns {number}
    *
    */
    friendAdd(subType, sendTime, fromQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
    *
    * Type=301 请求-好友添加
    * @param {number} subType 子类型，目前固定为request_add_friend
    * @param {number} sendTime
    * @param {number} fromQQ 来源QQ
    * @param {string} msg 附言
    * @param {string} responseFlag 反馈标识(处理请求用)
    * @returns {number}
    *
    */
    requestAddFriend(subType, sendTime, fromQQ, msg, responseFlag) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    /**
     *
     * Type=302 请求-群添加
     * @param {number} subType 请求子类型，add:加群请求、invite:邀请登录号入群
     * @param {number} sendTime
     * @param {number} fromGroup
     * @param {number} fromQQ
     * @param {string} msg 附言
     * @param {string} responseFlag 反馈标识(处理请求用)
     * @returns {number}
     *
     */
    requestAddGroup(subType, sendTime, fromGroup, fromQQ, msg, responseFlag) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
}
const app = new App(); //类名可以随意
exports.app = app;
/**
 *仅在debug模式下执行，若不需要也可注释掉
 *请注意，因为debug的内容在此处就会执行，因此是最先执行的内容！
 */
if (app.CQ.getDebug()) {
    app.debug();
}
