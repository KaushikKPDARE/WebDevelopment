//Microsoft.Glimmer.OneWay
//<AnimationCollection FilePath="C:\Users\Hari Prasandh\Desktop\Innowiz 2k13\Home.html.glimmer.js" xmlns="clr-namespace:GlimmerLib;assembly=GlimmerLib" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><Animation Name="Intro" EventType="load" Trigger="{x:Null}"><Animation.Targets><Target Name=".extra" Duration="3000" Easing="swing" Callback="null"><Target.Effects><OpacityEffect CSSName="opacity" DisplayName="Opacity Animation" MaxValue="1" MinValue="0" From="0" To="1" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /><XScaleEffect CSSName="width" DisplayName="X Scale Animation" MaxValue="5000" MinValue="-5000" From="-1096px" To="314" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target><Target Name=".row-1" Duration="5000" Easing="swing" Callback="null"><Target.Effects><OpacityEffect CSSName="opacity" DisplayName="Opacity Animation" MaxValue="1" MinValue="0" From="0" To="1" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target><Target Name=".row-2" Duration="1000" Easing="linear" Callback="null"><Target.Effects><OpacityEffect CSSName="opacity" DisplayName="Opacity Animation" MaxValue="1" MinValue="0" From="0" To="1" IsStartValue="True" IsActive="True" IsAnimatable="True" IsExpression="False" FormatString="" RequiresJQueryPlugin="False" JQueryPluginURI="" /></Target.Effects></Target></Animation.Targets></Animation></AnimationCollection>
jQuery(function($) {
var timer;
function Intro(event)
{
     $(".extra").css("opacity","0");
     $(".extra").css("width","-1096px");
    $(".extra").animate({"opacity":1,"width":314},3000, "swing", null);
     $(".row-1").css("opacity","0");
    $(".row-1").animate({"opacity":1},5000, "swing", null);
     $(".row-2").css("opacity","0");
    $(".row-2").animate({"opacity":1},1000, "linear", null);
}

Intro();

});