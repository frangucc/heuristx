$(".textFilter").click(function() {
d
  //$(this).background-color="#333333";
  alert("test");
});
function Client() {
  this.OldTypes=[];
  this.ActiveTypes=["TextFindings","Images","Twitter"];
  Client.prototype.updateResults=function()
  {
    //Using ActiveTypes, create the text links in the system
  }
}
Client.prototype.Popup=function(type, id)
{
  //set the selected effect here
  var selectedEffect = 'puff';

  //most effect types need no options passed by default
        var options = {};
  //check if it's scale, transfer, or size - they need options explicitly set
  if(selectedEffect == 'scale'){  options = {percent: 0}; }
        else if(selectedEffect == 'size'){ options = { to: {width: 200,height: 60} }; }

        // the effect
        $("#modalpopup").toggle(selectedEffect,options,500);

  //runEffect();
}
Client.prototype.SetResultType=function(n, id) {
  this.ActiveTypes[n]=id;
}
Client.prototype.FindTypePosition=function(type) {
  for(var n=0;n<3;n=n+1)
  {
    if(this.ActiveTypes[n]==type)
    {
      return(n+1);
    }
  }
  return(-1);
}
Client.prototype.refreshCols=function() {
  for(var n=0;n<3;n=n+1)
  {
    if($("#" + this.ActiveTypes[n]).html()!=$("#col" +(n+1)).html())
    {
      var newType=0;
      newType=0;
      var tags=[];
      if(this.OldTypes[n]==this.ActiveTypes[n])
      {
        var m=0;
        $("#col" +(n+1)).children("div").each(function() {
          tags[m]=$(this).html();
          m=m+1;
        });
        newType=1;
      }
      $("#col" +(n+1)).html($("#" + this.ActiveTypes[n]).html());
      if(newType==1)
      {
        var m=0;
        $("#col" +(n+1)).find("div").each(function() {
          if(tags[m]!=$(this).html()) {
            var fade=17;
            var fadeDiv=$(this);
            var intervalId=setInterval(function() {
              fadeDiv.css("background-color","rgb(" + (255-fade) +","+(255-fade)+","+(255-fade)+")");
              fade-=1;
              if(fade<=0) {
                clearInterval(intervalId);
              }
          },40);
          }
          m=m+1;
        });
      }
    }
  }
  this.OldTypes=this.ActiveTypes.slice();
}
Client.prototype.onTextFinding=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div class=\"text-resultreturn\" onclick=\"client.Popup('TextFinding'," + n  + ");\">\n";
    txt+="<h3>" + json[n].Title + "</h3>\n";
    txt+="<p>" + json[n].Description + "</p>\n";
    txt+="</div>\n";
  }
  $("#TextFindings").html(txt);
  this.refreshCols();
}
Client.prototype.onImage=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div class=\"image-resultreturn\" onclick=\"client.Popup('Image'," + n + ");\">\n";
    txt+="<img class=\"profileimg\" src=\"" + json[n].ImgUrl + "\"/>";
    txt+="<p>" + json[n].Title + "</p>";
    txt+="</div>";
  }
  $("#Images").html(txt);
  this.refreshCols();
}
Client.prototype.onBook=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div onclick=\"client.Popup('Book'," + n  + ");\" class=\"book-resultreturn\">\n";
    txt+="<p class=\"title\">" + json[n].Title + "</p>";
    txt+="<p class=\"author\">" + json[n].Author + "</p>";
    txt+="<img src=\"" + json[n].ImgUrl + "\" class=\"bookcover\"/>";
    txt+="<p>" + json[n].Desc + "</p>";
    txt+="</div>";
  }
  $("#Books").html(txt);
  this.refreshCols();
}
Client.prototype.onWayFair=function(json) {
  var txt="";
  for(n in json) {
    //I don't know what goes here
    txt+="<div onclick=\"client.Popup('WayFair'," + n + ");\"" + "class=\"wayfair-resultreturn\">";
    txt+="<h3>" + json[n].Title +"</h3>\n";
    txt+="<img src=\"" + json[n].ImgUrl + "\"/>\n";
    //txt+="<h3>" + json[n].Subtitle + "</h3>\n";
    txt+="<p>" + json[n].Desc + "</p>\n";
    txt+="</div>";
  }
  $("#WayFair").html(txt);
  this.refreshCols();
}
Client.prototype.onTwitter=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div class=\"twitter-resultreturn\" onclick=\"client.Popup('Twitter'," + n + ");\">";
    txt+="<img class=\"profileimg\" src=\"" + json[n].ProfileImg + "\"/>";
    txt+="<p>" + json[n].Message + "</p>";
    txt+="</div>";
  }
  $("#Twitter").html(txt);
  this.refreshCols();
}

Client.prototype.onSites=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div onclick=\"client.Popup('Sites'," + n  + ");\" class=\"site-resultreturn\">";
    txt+="<p class=\"title\">" + json[n].Title + "</p>";
    txt+="<p>" + json[n].Message + "</p>";
    txt+="</div>";
  }
  $("#Sites").html(txt);
  this.refreshCols();
}
Client.prototype.onDocs=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div onclick=\"client.Popup('Docs'," + n + ");\" class=\"doc-resultreturn\">";
    txt+="<img src=\"images/doc-ppoint.jpg\" class=\"type-img\"/>";
    txt+="<p class=\"title\">" + json[n].Title + "</p>";
    txt+="<p class=\"author\">" + json[n].Author + "</p>";
    txt+="<p class=\"source\">" + json[n].Source + "</p>";
    txt+="<p>" + json[n].Description + "</p>";
    txt+="</div>";
  }
  $("#Docs").html(txt);
  this.refreshCols();
}
Client.prototype.onVideo=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div class=\"video-resultreturn\" onclick=\"client.Popup('Video'," + n + ");\">";
    txt+="<p class=\"title\">" + json[n].Title + "</p>";
    txt+="<img src=\"" + json[n].ImgUrl + "\" class=\"screenshot\"/>";
    //txt+="<p class\"site\">" + json[n].Site + "</p>";
    txt+="</div>";
  }
  $("#Video").html(txt);
  this.refreshCols();
}
Client.prototype.onYahooAnswers=function(json) {
  var txt="";
  for(n in json) {
    txt+="<div class=\"yahoo-resultreturn\" onclick=\"location=client.Popup('YahooAnswers'," +n + ")\">";
    txt+="<p class=\"question\">" + json[n].Question + "</p>";
    txt+="<p class=\"details\">" + json[n].Details + "</p>\n";
    txt+="<p>" + json[n].Body + "</p>\n";
    txt+="</div>";

  }
  $("#YahooAnswers").html(txt);
  this.refreshCols();
}
Client.prototype.AddChat=function(ChatMsg)
{
  var chatField="<div class=\"chatbox_message_wrapper\">\n";
  chatField+="<div class=\"chatbox_image\"><img alt=\"\" src=\"" + ChatMsg.ImgUrl +"\" /></div>\n";
  chatField+="<div class=\"chatbox_message\"><span class=\"message_username\">" + ChatMsg.username + ": </span>" + ChatMsg.body + "\n";
  chatField+="<div class=\"clear\"></div>\n";
  chatField+="<div class=\"chatbox_link\">\n";
  chatField+="</div>";
  $("#chatbox_feed").append(chatField);
  $("#pane3").jScrollPane({showArrows:true, scrollbarWidth: 20,maintainPosition:false});
  if($("#pane3").html()!=null && $("#pane3").html().length>0)
  {
    $("#pane3")[0].scrollTo($("#pane3").html().length);
  }
}
Client.prototype.SetType=function(n,resultType) {
  ActiveTypes[n]=resultType;
}

Client.prototype.ScrollTimeline=function(initialStartDate,initialEndDate,finalStartDate,finalEndDate,Data)
{
  //Using the Data in JSON format do the scrolling
}

Client.prototype.AddTimelineTags=function(Tags)
{
  for(tag in Tags)
  {
    //do something with tag.tag, tag.time,tag.importance,tag.item_apge
  }
}
Client.prototype.ShowSearchResults=function(Sr)
{
  //
}
var client=new Client();
