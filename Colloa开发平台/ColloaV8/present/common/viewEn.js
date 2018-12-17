/*-------------------------------------------------
Copyright@2017, colloa system. All rights reserved.
-------------------------------------------------*/

var _sLang = "en";
var _sCkeditorLang = "en";

var translate = {
empty : "(Empty)",
deleteX : "Delete",
send : "Send",
remove : "Remove",
copy : "Copy",
paste : "Paste",
okAll : "Ok all",
ok : "Ok",
cancel : "Cancel",
quit : "Quit",
save : "Save",
saveAndQuit : "Save&Quit",
saveDraft : "Save",
withdraw : "Withdraw",
printForm : "Print form",
forwardTo : "Forward to",
rejectTo : "Back to",
upload : "Upload",
download : "Download",
preview : "Preview",
ieOnly : "Please use Internet Explorer browser for the correct result",
today : "Today",
nothing : "Empty",
areYouSure : "Are you sure ?",
closeAfterPrint : "Printing ended, close this page now ?",
uploading : "Uploading... Please wait and donot close the current window",
pasteFromDoc : "Are you sure to paste? Please copy other attachment(s) or document(s) firstly, then paste here",
noFile : "No file",
fileOnlyWithType: "Only file allowed with type of ",
inputRequired : "Please input value, or choose from drop-down list",
inputRequiredWithout : "Please input value, and without character of ",
promptRequiredWithout : "Please input value to filter, and without character of ",
numberRequired : "Please input number of value",
amountRequired : "Please input amount of value, with 2 decimal places",
dateRequired : "Please input date of value, formatted as yyyy/MM/dd hh:mm:ss",
uniqueRequired : "There is a repeated record in relevant dataset, please input again",
existRequired : "There is no record in relevant dataset, please input again",
quotationForbidden : "Character of quotation is not allowed",
selectionRequired : "No record selected",
selectionOverflowed : "Count of selected records cannot be over then ",
pageNotSaved : "Data on current page may not be saved",
taskSender : "Form creator",
lastProcResponsor : "Last responsor",
lastProcResponsorSupervisor : "Last responsor's suprvisor",
lastProcResponsorDivisionOnly : "Only users under the organization of last responsor",
defaultAllSelected : "Select all as default",
yourself : "Yourself",
yourSupervisor : "Your supervisor",
responsor : "Responsor",
participants : "Participants",
participateMode : "Mode",
participateModeList : "<input checked type=radio name=oStep value='CounterSign,'>CounterSign,<input type=radio name=oStep value='CounterDo,'>CounterDo,<input type=radio name=oStep value='Host,'>Host,<input type=radio name=oStep value='Assist,'>Assist,<input type=radio name=oStep value='Verify,'>Verify,<input type=radio name=oStep value='Refer,'>Refer,<input type=radio name=oStep value='Review,'>Review,<input type=radio name=oStep value='Execute,'>Execute,<br><input type=checkbox id=oMode>move out of processing queue after processed",
setTaskProcessed : "Set this form as processed (move out of my forms processing queue)",
fieldEditableOfResponsor : "Editable by responsor",
fieldEditableOfParticipants : "Editable by participants",
eventHandle : "Events",
flowRight : "Advanced",
condition : "Condition",
userRoles : "User roles",
belongTo : "Belong to",
allowPrintForm : "Allow printing form",
allowForward : "Allow forwarding form to others",
allowReject : "Allow backing to prevoius",
fixedResponsor: "Set responsor fixed (not selected at runnning)",
select : "Select",
selectNextResponsor : "Please select next responsor",
selectNextParticipants : "Select next participants",
inputComments : "Comments if necessary",
selectAllOrNone : "Select all/none",
sendByEnter : "Send by Enter",
messageHistory : "Message history",
noChart : "No chart",
barChart : "Bar chart",
pieChart : "Pie chart",
lineChart : "Line chart",
symbolFilter : "Please input < or = or ＞ as first character, then a date type of value or a number type of value, in order to continue filtering. For example: <2015/1/1 , >1000 ",
notAllowedForTrail : "Operation not allowed in case of trial, please click Cancel or Quit on page. If necessary, please apply for a testing system"
}

function $translate(s, v) {
if(s=="total record(s)") return "Total "+v+" record(s), ";
if(s=="current page") return "page "+v;
if(s=="first page") return "First page";
if(s=="previous page") return "Previous page";
if(s=="next page") return "Next page";
if(s=="last page") return "Last page";
if(s=="back") return "Back";
if(s=="refresh") return "Refresh";
if(s=="close") return "Close";
if(s=="invalid validation code") return "Validation code wrong or timed out";
if(s=="operation finished") return "Operation finished. If neccessary, please refresh relevant page(s) for new result";
if(s=="invalid request") return "Invalid request, or record processed by others. Please refresh relevant page(s) for new result";
if(s=="invalid recordset") return "Invalid record or status, or no right to access. It may be processed by others";
if(s=="continue next?") return "Operation finished. Continue next?";
if(s=="please delete its children firstly") return "Please delete its childen records firstly";
if(s=="too many active contexts") return "Too many active windows opened. Pleae close some of them, then try again";
if(s=="no right") return "No right. Please get right firstly, then refresh relevant pages or login again";
if(s=="invalid catalogue of item") return "Invalid catalogue of item";
if(s=="invalid input that may cause deadloop") return "Invalid input that may cause deadloop";
if(s=="invalid login name or password") return "Invalid user name or password";
if(s=="invalid session") return "Invalid session. It may be logged out or timed out";
if(s=="too many sessions") return "Too many users logged in system, please try later";
if(s=="too many users") return "Too many users registered or valid over then permission of license";
if(s=="invalid old password") return "Old password wrong";
if(s=="record(s) processed") return "record(s) processed";
if(s=="record(s) will be pasted now") return "record(s) will be pasted now. Are you sure?";
if(s=="record(s) copied to clipboard") return "record(s) copied to clipboard";
if(s=="record being used") return "This record is predefined by system or being used, not available to be operated now";
if(s=="operation not allowed") return "Operation not allowed here. Please select other position or category and try again";
if(s=="resource locked") return "Resource locked. Another user may be proccessing now";
if(s=="starting workflow test ...") return "Starting business processing test ...";
if(s=="ckeditor overflowed") return "Content in rich editor exceeds "+v+"bytes (including part of format), and should be less then 1024000bytes.\nIf possible, please attach file(s) with content then upload";
if(s=="not allowed to delete") return "Record(s) not allowed to delete. It may be created by other modules, or associated with other record(s)";
if(s=="wordEditorActions") return "<div style='font-size:12px;padding:15px;'>In case of first access, please <a style='text-decoration:none;' href='../addon/webOffice.exe'>click here</a> to download a control and install it, then try again by IE browser with the control allowed.<br>If no Word Editor shown, please refresh this page.<br>Don't close the parent page before this page closed.<br><br><input type=button style='font-size:12px;width:100%;' onclick=\"onAction(1,'Save failed, as the parent page closed.','Save succeeded. Please remember to save or submit the parent page after this page closed.','Save succeeded.');\" value='Save'><br><input type=button style='font-size:12px;width:100%;' onclick='onAction(0);' value='Quit'></div>";
return s;
}

var WTFLang = {
ieOnly : "Please use Internet Explorer browser for the correct result",
FontSongti		: "Arial",
CopyProcSelected	: "Copy object selected",
DeleteProcSelected	: "Delete object selected",
ShapeOval		: "Oval",
ShapeRect		: "Rectangle",
ShapeRoundRect		: "RoundRectangle",
ShapeDiamond		: "Diamond",
ShapeLine		: "Line",
ShapePolyLine		: "Polyline",
AddNew			: "New",
AdjustObjectForTop: "object beyonds the top border, will be automatically adjusted",
AdjustObjectForLeft: "object beyonds the left border, will be automatically adjusted",
SNo: "SNo",
Existed: "already existed! ",
ProcStart : "Start",
ProcEnd : "End",
ProcLimited: "Only 50 processes are allowed!",
ProcChildFlow: "Child process",
ProcFirstFlow: "First process",
ProcMiddleFlow: "Middle process",
ProcStartFlow: "Begin process",
ProcEndFlow: "End process",
ProcFromFlow: "Start process",
ProcToFlow: "End process",
StepInNeed: " need step incoming",
StepOutNeed: " need step outgoing",
NoDeleteOnStartEnd: "Start process and End process are necessary in a flow chart",
NoDeleteOnStartStep: "Begin step is required in a flow chart",
ConfirmToDelete: "Are you sure to delete",
ReInputAsExisted: " already existed! Please input again",
No2StartProc: "Not allow 2 Start processes existing in a flow chart",
FlowStart: "Flow start",
AvoidDuplicatedStep: "There is already a step, please change!",
AvoidDuplicatedStep2: "There is already a step, operation failed",
NeedPolyLineOn1Proc: "A step which has same Start and End process should only use Polyline, please restore the original starting point then change shape!",
NoPointSelf: "Not allowed to point to itself!",
Name: "Name",
NameEmpty: "[Name] not allowed being empty or containing an empty character!",
TextSize: "Text size",
TextSizeRule: "[Text size] Please enter 1~2 digit of number with px or pt as suffix!",
ProcType: "Process type",
Responsor: "Responsor",
Participants: "Participants",
Observer: "Observer",
FlowRight: "Advanced",
FieldRight: "Fields",
EventHandle: "Events",
PropX: "X axis",
PropY: "Y axis",
PropXRule: "[X axis] please enter 1~4 digit of number!",
PropYRule: "[Y axis] please enter 1~4 digit of number!",
PropWidth: "Width",
PropWidthRule: "[Shape width] Please enter 1~4 digit of number!",
PropHeight: "Height",
PropHeightRule: "[Shape hight] please enter 1~4 digit of number!",
Shape: "Shape",
Condition: "Condition",
ArrowStart: "Start arrow",
ArrowEnd: "End arrow",
ArrowNone: "None",
ArrowClassic: "Classic",
ArrowBlock: "Black",
ArrowDiamond: "Diamond",
ArrowOval: "dot",
ArrowOpen: "Little arrow",
LineSize: "Line weight",
LineSizeRule: "[Line weight] please enter 1 digit of number!",
PropZ: "Z axis",
PropZRule: "[Z axis] Please enter 1~3 digit of number!",
NoUndoLog: "No operation to undo",
NoRedoLog: "No operation to restore",
StepFromToRule: "A step should comply with 'starting point is not on End process as well as ending point is not on Start process'",
StepFirstRule: "First process is not allowed to draw line manually!",
StepDoHelp: "Start point and end point should be a process",
ClickToOpenPanel: "Click to expand",
ClickToClosePanel: "Click to collapse",
PanelOverTop: "Toolbar beyinds the top border, will be automatically adjusted",
DbClickOrDragOnPanel: "Double click to expand/collapse, or hold on to move",
NoObjectSelected: "No object selected!",
FlowValidated: "Verification completed, this is a correct flow chart!",
FlowValidatedError: "Validation error",
AskToSave: "Do you want to continue saving?",
AskToQuit: "Do you want to quit now?",
FlowSaveOK: "Save successfully!",
FlowSaveError: "Failed to save, there may be a running form which is created by this flow",
ProcCopiedOnly: "Only process can be copied!",
ProcCopiedConfirm: "Are you sure to copy the process",
Hide: "Hide",
Display: "Display",
PanelBox: "Toolbox",
PropertyBox: "Property box",
ObjectView: "Object view",
DataView: "Data view",
Property: "Property",
ValidateFlow: "Validate flow chart",
SaveFlow: "Save flow chart",
DeleteObjectSelected: "Delete the selected object Del",
Undo: "Undo CTRL+z",
Redo: "Redo Ctrl+Y",
SelectObjectPrompt: "Select object",
AddProcPrompt: "Add [process] (rectangle)",
AddStepPrompt: "Add [step] (polyline)",
DlgAboutInfo: "For more information, please visit http://www.colloa.com"
}

function $amountOfChinese(numberValue) {
  return "";
}
