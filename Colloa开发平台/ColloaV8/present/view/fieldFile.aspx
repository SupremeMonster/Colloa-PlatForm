<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="fieldFile.aspx.cs" Inherits="view.view.fieldFile" %>

<!DOCTYPE html>
<html><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>filesEditor</title>
  <script type="text/javaScript">document.write("<script type='text/javaScript' src='../common/view"+((parent&&parent._sLang)?parent._sLang:"cn")+".js'><\/script>");</script>
</head>
<body oncontextmenu="return false;" scroll=no>
  <script type="text/javaScript" language="javaScript">
      var bPhone = ((parent.getCookie("colloaV8.viewType")||"").indexOf("viewPhone") >= 0);
      function display(n) {
          if (!n) n = 1;
          for (var i = 0; i < n; i++) {
              document.getElementById("file" + i).style.display = "block";
              if(bPhone) document.getElementById("file" + i).style.zoom = "120%";
          }
      }
      function upload(obj) {
          document.getElementById("filesToDelete").style.display = "none";
          document.forms[0].style.display = "block";
          var bHasFile = false;
          var sType = document.getElementById("fileType").value.toLowerCase();
          if (sType.length > 0) {
              var ec = document.forms[0].elements;
              for (var i = 0; i < ec.length; i++) {
                  if (ec[i].type == "file") {
                      var s = ec[i].value;
                      if (s.length > 0) {
                          if (sType.indexOf(s.substring(s.lastIndexOf("."), s.length).toLowerCase()) < 0) {
                              document.getElementById("inform").innerHTML = translate["fileOnlyWithType"] + sType;
                              ec[i].focus();
                              return;
                          }
                          bHasFile = true;
                          break;
                      }
                  }
              }
          }
          else {
              var ec = document.forms[0].elements;
              for (var i = 0; i < ec.length; i++) {
                  if (ec[i].type == "file") {
                      var s = ec[i].value;
                      if (s.length > 0) {
                          bHasFile = true;
                          break;
                      } 
                  }
              }
          }
          if (bHasFile) {
              obj.disabled = true;
              document.getElementById("inform").innerHTML = translate["uploading"];
              try {
                  var formData = new FormData(document.forms[0]);
                  var xmlHttpRequest = new XMLHttpRequest();
                  xmlHttpRequest.upload.onprogress = function (evt) {
                      if (evt.lengthComputable) {
                          document.getElementById("inform").innerHTML = translate["uploading"] + " (" + Math.round(evt.loaded*100/evt.total) + "%)";
                      }
                  };
                  xmlHttpRequest.onreadystatechange = function () {
                      if (xmlHttpRequest.readyState == 4) {
                          if(xmlHttpRequest.status == 200) {
                              eval(xmlHttpRequest.responseText);
                          }
                          else {
                              alert(xmlHttpRequest.responseText);
                          }
                          document.getElementById("inform").innerHTML = "";
                          obj.disabled = false;
                          //document.forms[0].reset(); //not able to clean value in case of IE11
                          var ec = document.forms[0].elements;
                          for (var i = 0; i < ec.length; i++) {
                              if (ec[i].type == "file") ec[i].value = "";
                          }
                      }
                  };
                  xmlHttpRequest.open("POST", location.href + "&_ajax=1&" + Math.random(), true);
                  xmlHttpRequest.send(formData);
              }
              catch (err) {
                  document.forms[0].submit();
              }
          }
      }
      function removes(obj) {
          var eField = parent._eLastActiveEvent.parentNode.lastChild;
          if (eField) {
              var vFilesToDelete = document.getElementById("filesToDelete");
              var as = eField.getElementsByTagName("A");
              if (as.length == 0) {
                  vFilesToDelete.innerHTML = translate["noFile"];
              }
              else {
                  vFilesToDelete.innerHTML = "";
                  for (var i = 0; i < as.length; i++) {
                      vFilesToDelete.innerHTML += "<div style='margin-bottom:5px;'>" + as[i].innerHTML + " <img onclick='removeOne(this);' src='../images/delete.gif' style='vertical-align:middle;cursor:pointer;' alt='" + translate['remove'] + "'></div>";
                  };
              }
              document.forms[0].style.display = "none";
              vFilesToDelete.style.display = "block";
          }
          else {
              obj.disabled = true;
          }
      }
      function removeOne(e) {
          if (confirm(translate["areYouSure"])) {
              var pe = e.parentNode;
              var es = pe.parentNode.getElementsByTagName("DIV");
              var i = 0;
              for (; i < es.length; i++) {
                  if (es[i] == pe) break;
              }
              pe.parentNode.removeChild(pe);
              pe = parent._eLastActiveEvent.parentNode.lastChild;
              var s = pe.innerHTML;
              var sSearch = "<A";
              if (s.indexOf(sSearch) < 0) sSearch = "<a";
              var nPos = -1;
              for (j = 0; j <= i; j++) nPos = s.indexOf(sSearch, ++nPos);
              var nPos2 = s.indexOf(sSearch, nPos + 1);
              if (nPos2 > 0) pe.innerHTML = s.replace(s.substring(nPos, nPos2), "");
              else pe.innerHTML = s.replace(s.substr(nPos), "");
          }
      }
  </script>
  <form runat="server" method="post" enctype="multipart/form-data" style="margin:0px">
  <div id="file0" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file0" style="font-size:13px;" /></div>
  <div id="file1" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file1" style="font-size:13px;" /></div>
  <div id="file2" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file2" style="font-size:13px;" /></div>
  <div id="file3" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file3" style="font-size:13px;" /></div>
  <div id="file4" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file4" style="font-size:13px;" /></div>
  <div id="file5" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file5" style="font-size:13px;" /></div>
  <div id="file6" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file6" style="font-size:13px;" /></div>
  <div id="file7" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file7" style="font-size:13px;" /></div>
  <div id="file8" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file8" style="font-size:13px;" /></div>
  <div id="file9" style="display:none;margin-bottom:5px;"><input type="file" multiple size="50" name="file9" style="font-size:13px;" /></div>
  </form>
  <div style="margin:10px 0px;"><script language=javascript>document.write("<input style='font-size:13px;' type='button' value=' " + translate['upload'] + " ' onclick='upload(this);'/> <input style='font-size:13px;' type='button' value=' " + translate['remove'] + " ' onclick='removes(this);'/>");</script> <span id="inform" runat="server"></span><input type="hidden" id="fileType" runat="server" /></div>
  <div id="filesToDelete" style="font-size:13px;font-family:tahoma,arial,verdana,sans-serif;"></div>
  </body>
</html>