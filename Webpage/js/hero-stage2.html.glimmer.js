//Microsoft.Glimmer.OneWay
//<AnimationCollection FilePath="C:\Users\Hari Prasandh\Desktop\Innowiz 2k13\animated\js/hero-stage2.html.glimmer.js" xmlns="clr-namespace:GlimmerLib;assembly=GlimmerLib" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><Animation Name="robo_in" EventType="load" Trigger="{x:Null}"><Animation.Targets><Target Name="#bigGuyPointing" Duration="1000" Easing="easeOutElastic" Callback="null"><Target.Effects><TimerEffect CSSName="text1" DisplayName="Timer Effect" MaxValue="10000" MinValue="1" From="0" To="1000" IsStartValue="False" IsActive="True" IsAnimatable="False" IsExpression="False" FormatString="clearTimeout(timer);&#xD;&#xA;     timer = setTimeout(eval({1}),{2});&#xD;&#xA;" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="-1101px" To="0" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target><Target Name="#slide1text" Duration="1" Easing="linear" Callback="null"><Target.Effects><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="0" To="600" IsStartValue="False" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target><Target Name="#slide2text" Duration="1" Easing="linear" Callback="null"><Target.Effects><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="0" To="600" IsStartValue="False" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target><Target Name="#slide3text" Duration="1" Easing="linear" Callback="null"><Target.Effects><YTranslationEffect CSSName="top" DisplayName="Y Position Animation" MaxValue="5000" MinValue="-5000" From="0" To="80" IsStartValue="False" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="-50px" To="-50" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target></Animation.Targets></Animation><Animation Name="text1" EventType="[none]" Trigger="{x:Null}"><Animation.Targets><Target Name="#slide1text" Duration="1000" Easing="easeOutElastic" Callback="null"><Target.Effects><TimerEffect CSSName="text2" DisplayName="Timer Effect" MaxValue="10000" MinValue="1" From="0" To="2000" IsStartValue="False" IsActive="True" IsAnimatable="False" IsExpression="False" FormatString="clearTimeout(timer);&#xD;&#xA;     timer = setTimeout(eval({1}),{2});&#xD;&#xA;" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="1644px" To="0" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target></Animation.Targets></Animation><Animation Name="text2" EventType="[none]" Trigger="{x:Null}"><Animation.Targets><Target Name="#slide1text" Duration="1" Easing="easeInOutElastic" Callback="null"><Target.Effects><TimerEffect CSSName="reload" DisplayName="Timer Effect" MaxValue="10000" MinValue="1" From="0" To="2000" IsStartValue="False" IsActive="True" IsAnimatable="False" IsExpression="False" FormatString="clearTimeout(timer);&#xD;&#xA;     timer = setTimeout(eval({1}),{2});&#xD;&#xA;" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="0" To="913" IsStartValue="False" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target><Target Name="#slide2text" Duration="600" Easing="easeInOutElastic" Callback="null"><Target.Effects><YTranslationEffect CSSName="top" DisplayName="Y Position Animation" MaxValue="5000" MinValue="-5000" From="-2557px" To="-20" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="0" To="-100" IsStartValue="False" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target></Animation.Targets></Animation><Animation Name="reload" EventType="[none]" Trigger="{x:Null}"><Animation.Targets><Target Name="#slide2text" Duration="1" Easing="linear" Callback="null"><Target.Effects><TimerEffect CSSName="text1" DisplayName="Timer Effect" MaxValue="10000" MinValue="1" From="0" To="1" IsStartValue="False" IsActive="True" IsAnimatable="False" IsExpression="False" FormatString="clearTimeout(timer);&#xD;&#xA;     timer = setTimeout(eval({1}),{2});&#xD;&#xA;" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XTranslationEffect CSSName="left" DisplayName="X Position Animation" MaxValue="5000" MinValue="-5000" From="0" To="-1507" IsStartValue="False" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target></Animation.Targets></Animation></AnimationCollection>
jQuery(function($) {
var timer;
function robo_in(event)
{
     clearTimeout(timer);
     timer = setTimeout(eval("text1"),"1000");
     $("#bigGuyPointing").css("left","-1101px");
    $("#bigGuyPointing").animate({"left":0},1000, "easeOutElastic", null);
    $("#slide1text").animate({"left":600},1, "linear", null);
    $("#slide2text").animate({"left":600},1, "linear", null);
     $("#slide3text").css("left","-50px");
    $("#slide3text").animate({"top":80,"left":-50},1, "linear", null);
}

function text1(event)
{
     clearTimeout(timer);
     timer = setTimeout(eval("text2"),"2000");
     $("#slide1text").css("left","1644px");
    $("#slide1text").animate({"left":0},1000, "easeOutElastic", null);
}

function text2(event)
{
     clearTimeout(timer);
     timer = setTimeout(eval("reload"),"2000");
    $("#slide1text").animate({"left":913},1, "easeInOutElastic", null);
     $("#slide2text").css("top","-2557px");
    $("#slide2text").animate({"top":-20,"left":-100},600, "easeInOutElastic", null);
}

function reload(event)
{
     clearTimeout(timer);
     timer = setTimeout(eval("text1"),"1");
    $("#slide2text").animate({"left":-1507},1, "linear", null);
}

robo_in();




});