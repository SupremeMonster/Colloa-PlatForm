/*----------------------------------------------
版權所有@2017，南京二進位軟體有限公司。保留所有權利。
----------------------------------------------*/

var _sLang = "tc";
var _sCkeditorLang = "zh";

var translate = {
empty : "(空)",
deleteX : "刪除",
send : "發送",
remove : "移除",
copy : "複製",
paste : "粘貼",
okAll : "全部確定",
ok : "確定",
cancel : "取消",
quit : "退出",
save : "保存",
saveAndQuit : "保存並退出",
saveDraft : "保存",
withdraw : "撤除",
printForm : "列印表單",
forwardTo : "轉發給",
rejectTo : "回退至",
upload : "上傳",
download : "下載",
preview : "預覽",
ieOnly : "請使用 Internet Explorer 流覽器，以獲得正確的結果",
today : "今天",
nothing: "無",
areYouSure : "確定嗎？",
closeAfterPrint : "列印完成，現在要關閉頁面嗎？",
uploading : "正在上傳... 請稍候，不要關閉當前窗口",
pasteFromDoc : "確定要粘貼嗎？請首先複製其他附件或者文檔，然後在此粘貼",
noFile : "沒有文檔",
fileOnlyWithType: "只能允許下列類型的文檔：",
inputRequired : "請輸入正確的值，或者從下拉清單中選擇",
inputRequiredWithout : "請輸入正確的值並且不能包含字元：",
promptRequiredWithout : "請輸入要篩選的值並且不能包含字元：",
numberRequired : "請輸入正確的數字值",
amountRequired : "請輸入正確的金額，小數點後保留兩位",
dateRequired : "請輸入正確的日期或時間，格式為 yyyy/MM/dd hh:mm:ss",
uniqueRequired : "在相關資料集中已經存在一條重複的記錄，請重新輸入",
existRequired : "在相關資料集中找不到對應的記錄，請重新輸入",
quotationForbidden : "請不要輸入單引號或雙引號",
selectionRequired : "沒有選擇任何記錄。請首先選擇記錄",
selectionOverflowed : "選擇的記錄數不能超過 ",
pageNotSaved : "頁面上的資料可能沒有被保存",
taskSender : "事務發起人",
lastProcResponsor : "前一步驟責任人",
lastProcResponsorSupervisor : "前一步驟責任人的上級主管",
lastProcResponsorDivisionOnly : "限制在前一步驟責任人所在的組織機構中",
defaultAllSelected : "默認為全部選中",
yourself : "您自己",
yourSupervisor : "您的上級主管",
responsor : "責任人",
participants : "參與人",
participateMode : "處理方式",
participateModeList : "<input checked type=radio name=oStep value='會簽,'>會簽,<input type=radio name=oStep value='會辦,'>會辦,<input type=radio name=oStep value='主辦,'>主辦,<input type=radio name=oStep value='協辦,'>協辦,<input type=radio name=oStep value='審閱,'>審閱,<input type=radio name=oStep value='參閱,'>參閱,<input type=radio name=oStep value='評審,'>評審,<input type=radio name=oStep value='執行,'>執行,<br><input type=checkbox id=oMode>處理後就從待處理事務佇列中移出",
setTaskProcessed : "設置本事務為已處理（從我的待處理事務佇列中移出）",
fieldEditableOfResponsor : "責任人可寫欄位",
fieldEditableOfParticipants : "參與人可寫欄位",
eventHandle : "事件處理",
flowRight : "高級設置",
condition : "條件",
userRoles : "用戶身份",
belongTo : "屬於",
allowPrintForm : "允許列印表單",
allowForward : "允許將事務轉發給其他人",
allowReject : "允許將事務回退至以前步驟",
fixedResponsor : "固定責任人和參與人(不在運行時進行選擇)",
select : "請選擇",
selectNextResponsor : "請選擇後續處理的責任人",
selectNextParticipants : "請選擇後續處理的參與人",
inputComments : "請輸入注釋、評論或意見",
selectAllOrNone : "全選/全不選",
sendByEnter : "按回車鍵時發送",
messageHistory : "歷史消息",
noChart : "不顯示圖形",
barChart : "顯示柱狀圖",
pieChart : "顯示餅狀圖",
lineChart : "顯示折線圖",
symbolFilter : "請輸入 < 或者 = 或者 ＞ 符號作為第一個字元，並輸入正確的日期值或者數位值，以便於進行篩選。譬如 <2015/1/1 、>1000 ",
notAllowedForTrail : "在當前體驗系統中不能進行此種操作，請點擊頁面上的 取消 或者 退出 按鈕。如有需要，請申請開通專門的試用系統"
}

function $translate(s, v) {
if(s=="total record(s)") return "共有 "+v+" 條記錄，";
if(s=="current page") return "第 "+v+" 頁";
if(s=="first page") return "首頁";
if(s=="previous page") return "上頁";
if(s=="next page") return "下頁";
if(s=="last page") return "尾頁";
if(s=="back") return "後退";
if(s=="refresh") return "刷新";
if(s=="close") return "關閉";
if(s=="invalid validation code") return "錯誤的驗證碼或者驗證碼已經失效";
if(s=="operation finished") return "操作完成。可以刷新相關的頁面，查看最新的結果";
if(s=="invalid request") return "操作無效。可能參數不正確，或者記錄已經被處理。要查看最新的結果，請刷新相關的頁面";
if(s=="invalid recordset") return "記錄不存在或者狀態不正確，或者您沒有許可權訪問。可能已經被其他人處理過";
if(s=="continue next?") return "操作完成。繼續嗎？";
if(s=="please delete its children firstly") return "該記錄還有子記錄，不能被刪除。請首先刪除它的子記錄";
if(s=="too many active contexts") return "您打開了較多的活動視窗。請關閉其中一些，然後再試";
if(s=="no right") return "沒有許可權。請首先獲得授權，然後刷新相關的頁面，或者重新登錄系統";
if(s=="invalid catalogue of item") return "沒有定義模組的單記錄視圖";
if(s=="invalid input that may cause deadloop") return "輸入錯誤，可能導致閉環";
if(s=="invalid login name or password") return "用戶名不存在或者口令錯誤";
if(s=="invalid session") return "會話無效，可能已經註銷或者超時。請重新登錄系統";
if(s=="too many sessions") return "登錄系統的用戶太多了，請稍後再試";
if(s=="too many users") return "註冊或有效用戶太多了，超過了系統許可證的範圍";
if(s=="invalid old password") return "舊口令不正確";
if(s=="record(s) processed") return "個記錄被處理";
if(s=="record(s) will be pasted now") return "個記錄將要被粘貼。確定嗎？";
if(s=="record(s) copied to clipboard") return "個記錄被複製到剪貼板中";
if(s=="record being used") return "記錄是系統內置的或者正在被使用，不能夠進行此種操作";
if(s=="operation not allowed") return "不能在當前位置進行此種操作。請選擇其他位置或某個分類後再試";
if(s=="resource locked") return "資源被鎖定，可能有其他用戶正在進行類似的操作";
if(s=="starting workflow test ...") return "正在啟動業務流程仿真測試 ...";
if(s=="ckeditor overflowed") return "線上編輯器中的字元數（含格式部分）達到 "+v+"bytes，超出了 1024000bytes 的緩存限制，請減少輸入的內容。\n如果有可能，也可以採用上傳附件的方式";
if(s=="not allowed to delete") return "記錄不可以被刪除。可能被其他模組所創建，或者與其他記錄相關聯";
if(s=="wordEditorActions") return "<div style='font-size:12px;padding:15px;'>第一次打開本頁面時，請 <a style='text-decoration:none;' href='../addon/webOffice.exe'>點擊此處</a> 下載一個外掛程式並安裝，然後使用 IE 流覽器操作並允許外掛程式運行。<br>如果 Word 線上編輯器沒有顯示，請刷新一下本頁面。<br>在本頁面關閉前，請不要關閉父頁面。<br><br><input type=button style='font-size:12px;width:100%;' onclick=\"onAction(1,'父頁面已經被關閉，不能保存。','保存成功。在關閉本頁面後，請記得保存或提交父頁面。','保存成功。');\" value='保存'><br><input type=button style='font-size:12px;width:100%;' onclick='onAction(0);' value='退出'></div>";
return s;
}

var WTFLang = {
ieOnly : "請使用 Internet Explorer 流覽器，以獲得正確的結果",
FontSongti		: "宋體",
CopyProcSelected	: "複製選中步驟",
DeleteProcSelected	: "刪除選中對象",
ShapeOval		: "圓形",
ShapeRect		: "方形",
ShapeRoundRect		: "圓角形",
ShapeDiamond		: "菱形",
ShapeLine		: "直線",
ShapePolyLine		: "折線",
AddNew			: "新建",
AdjustObjectForTop	: "物件上邊界超出，將自動調整.",
AdjustObjectForLeft	: "物件左邊界超出，將自動調整.",
SNo			: "編號",
Existed			: "已經存在！",
ProcStart		: "開始",
ProcEnd			: "結束",
ProcLimited		: "最多不允許超過50個步驟！",
ProcChildFlow		: "子流程",
ProcFirstFlow		: "第一個步驟",
ProcMiddleFlow		: "中間步驟",
ProcStartFlow		: "開始步驟",
ProcEndFlow		: "結束步驟",
ProcFromFlow		: "起點步驟",
ProcToFlow		: "終點步驟",
StepInNeed		: " 必須有輸入路徑",
StepOutNeed		: " 必須有輸出路徑",
NoDeleteOnStartEnd	: "不能刪除！一個流程圖中，開始與結束步驟是必需的",
NoDeleteOnStartStep	: "不能刪除！一個流程圖中，流程開始路徑是必需的",
ConfirmToDelete		: "確定要刪除",
ReInputAsExisted	: "已經存在！ 請重新輸入！",
No2StartProc		: "一個流程裏面不允許存在兩個開始步驟",
FlowStart		: "流程開始",
AvoidDuplicatedStep	: "已經有一個路徑，請更改！",
AvoidDuplicatedStep2	: "已經有一個路徑，操作不成功.",
NeedPolyLineOn1Proc	: "起點與終點步驟相同的[路徑]只能使用折角線，請先恢復原起點並更改形狀！",
NoPointSelf		: "不能指向本身！",
Name			: "名稱",
NameEmpty		: "[名稱]不能為空或包含空字元！",
TextSize		: "文本大小",
TextSizeRule		: "[文本大小]請輸入1-2位元數位，並在最後加上px或pt！",
ProcType		: "步驟類型",
Responsor		: "責任人",
Participants		: "參與人",
Observer		: "監控人",
FlowRight		: "高級設置",
FieldRight		: "欄位許可權",
EventHandle		: "事件處理",
PropX			: "X軸座標",
PropY			: "Y軸座標",
PropXRule		: "[X軸座標]請輸入1-4位元數位！",
PropYRule		: "[Y軸座標]請輸入1-4位元數位！",
PropWidth		: "圖形寬度",
PropWidthRule		: "[圖形寬度]請輸入1-4位元數位！",
PropHeight		: "圖形高度",
PropHeightRule		: "[圖形高度]請輸入1-4位元數位！",
Shape			: "形狀",
Condition		: "條件",
ArrowStart		: "起始箭頭",
ArrowEnd		: "終止箭頭",
ArrowNone		: "無",
ArrowClassic		: "典型",
ArrowBlock		: "實心",
ArrowDiamond		: "鑽石",
ArrowOval		: "圓點",
ArrowOpen		: "小箭頭",
LineSize		: "線條粗細",
LineSizeRule		: "[線條粗細]請輸入1位元數位！",
PropZ			: "Z軸",
PropZRule		: "[Z軸]請輸入1-3位元數位！",
NoUndoLog		: "沒有操作記錄可以撤銷.",
NoRedoLog		: "沒有操作記錄可以恢復.",
StepFromToRule		: "路徑必須符合“起點不能是結束步驟，終點不能是開始步驟”的規則！",
StepFirstRule		: "開始路徑不允許手動聯線！",
StepDoHelp		: "起點或終點不是[步驟]，請在[步驟]圖形上按住滑鼠並拖動到另一[步驟]圖形上鬆開.",
ClickToOpenPanel	: "單擊展開工具欄",
ClickToClosePanel	: "單擊收縮工具欄",
PanelOverTop		: "工具欄上邊界超出，將自動調整.",
DbClickOrDragOnPanel	: "雙擊可以展開/收縮工具欄，按住左鍵移動位置.",
NoObjectSelected	: "當前沒有選中物件！用滑鼠單擊流程圖上的物件可以選中它",
FlowValidated		: "校驗完成，這是一個合法的流程圖！",
FlowValidatedError	: "當前有效性檢查有誤",
AskToSave		: "是否要繼續保存？",
AskToQuit		: "現在要退出嗎？",
FlowSaveOK		: "保存成功！",
FlowSaveError		: "保存失敗！可能有相關的事務正在運行！",
ProcCopiedOnly		: "只有步驟可以複製！",
ProcCopiedConfirm	: "確定要複製步驟",
Hide			: "隱藏",
Display			: "顯示",
PanelBox		: "工具箱",
PropertyBox		: "屬性箱",
ObjectView		: "物件視圖",
DataView		: "資料視圖",
Property		: "屬性",
ValidateFlow		: "校驗流程圖",
SaveFlow		: "保存流程圖",
DeleteObjectSelected	: "刪除選中對象 Del",
Undo			: "撤銷操作 Ctrl+Z",
Redo			: "恢復操作 Ctrl+Y",
SelectObjectPrompt	: "選擇物件\n\n1.單擊本按鈕\n2.在工作區(畫布)上單擊[步驟]或[路徑]的圖形",
AddProcPrompt		: "新增[步驟](方形)\n\n1.單擊本按鈕\n2.在工作區(畫布)上空白位置按住左鍵\n3.拉動滑鼠\n4.鬆開滑鼠左鍵",
AddStepPrompt		: "新增[路徑](折角線)\n\n1.單擊本按鈕\n2.在[步驟]圖形(起點)上按住滑鼠左鍵\n3.拉動滑鼠至某[步驟]圖形(終點)中間位置\n4.鬆開滑鼠左鍵",
DlgAboutInfo		: "要獲得更多資訊請訪問 http://www.colloa.com"
}

function $amountOfChinese(numberValue) {
  var numberValue = Math.round(numberValue * 100).toString(); // 数字金额
  var chineseValue = ""; // 转换后的汉字金额
  var string1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
  var string2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
  var len = numberValue.length; // numberValue 的字符串长度
  var ch1; // 数字的汉语读法
  var ch2; // 数字位的汉字读法
  var nZero = 0; // 用来计算连续的零值的个数
  var string3; // 指定位置的数值
  if (len > 15) {
    alert("超出计算范围");
    return "";
  }
  if (numberValue == 0) {
    chineseValue = "零元整";
    return chineseValue;
  }
  string2 = string2.substr(string2.length - len, len); // 取出对应位数的string2的值
  for (var i = 0; i < len; i++) {
    string3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
    if (i != (len - 3) && i != (len - 7) && i != (len - 11) && i != (len - 15)) {
      if (string3 == 0) {
        ch1 = "";
        ch2 = "";
        nZero = nZero + 1;
      }
      else if (string3 != 0 && nZero != 0) {
        ch1 = "零" + string1.substr(string3, 1);
        ch2 = string2.substr(i, 1);
        nZero = 0;
      }
      else {
        ch1 = string1.substr(string3, 1);
        ch2 = string2.substr(i, 1);
        nZero = 0;
      }
    }
    else { // 该位是万亿，亿，万，元位等关键位
      if (string3 != 0 && nZero != 0) {
        ch1 = "零" + string1.substr(string3, 1);
        ch2 = string2.substr(i, 1);
        nZero = 0;
      }
      else if (string3 != 0 && nZero == 0) {
        ch1 = string1.substr(string3, 1);
        ch2 = string2.substr(i, 1);
        nZero = 0;
      }
      else if (string3 == 0 && nZero >= 3) {
        ch1 = "";
        ch2 = "";
        nZero = nZero + 1;
      }
      else {
        ch1 = "";
        ch2 = string2.substr(i, 1);
        nZero = nZero + 1;
      }
      if (i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
        ch2 = string2.substr(i, 1);
      }
    }
    chineseValue = chineseValue + ch1 + ch2;
  }
  if (string3 == 0) { // 最后一位（分）为0时，加上“整”
    chineseValue = chineseValue + "整";
  }
  return chineseValue;
}
