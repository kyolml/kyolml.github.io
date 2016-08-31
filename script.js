<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1404.47">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Consolas; color: #a71d5d; -webkit-text-stroke: #a71d5d}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Consolas; color: #323333; -webkit-text-stroke: #323333; min-height: 14.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Consolas; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Consolas; color: #323333; -webkit-text-stroke: #323333}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #323333; -webkit-text-stroke: 0px #323333}
    span.s3 {font-kerning: none; color: #795da3; -webkit-text-stroke: 0px #795da3}
    span.s4 {font-kerning: none; color: #183691; -webkit-text-stroke: 0px #183691}
    span.s5 {font-kerning: none; color: #0086b3; -webkit-text-stroke: 0px #0086b3}
    span.s6 {font-kerning: none; color: #a71d5d; -webkit-text-stroke: 0px #a71d5d}
    table.t1 {border-collapse: collapse}
    td.td1 {width: 928.0px; padding: 0.0px 10.0px 0.0px 10.0px}
    td.td2 {width: 50.0px; min-width: 50.0px; border-style: solid; border-width: 0.0px 1.0px 0.0px 0.0px; border-color: transparent #eeeeee transparent transparent; padding: 0.0px 10.0px 0.0px 10.0px}
  </style>
</head>
<body>
<table cellspacing="0" cellpadding="0" class="t1">
  <tbody>
    <tr>
      <td colspan="2" valign="top" class="td1">
        <p class="p1"><span class="s1">var</span><span class="s2"> </span><span class="s3">main</span><span class="s2"> </span><span class="s1">=</span><span class="s2"> </span><span class="s1">function</span><span class="s2">() {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
        <p class="p2"><span class="s1"></span><br></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s3">$</span><span class="s1">(</span><span class="s4">'form'</span><span class="s1">).</span><span class="s5">submit</span><span class="s1">(</span><span class="s6">function</span><span class="s1">(</span><span class="s5">event</span><span class="s1">) {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s6">var</span><span class="s1"> $input </span><span class="s6">=</span><span class="s1"> </span><span class="s3">$</span><span class="s1">(</span><span class="s5">event</span><span class="s1">.</span><span class="s5">target</span><span class="s1">).</span><span class="s5">find</span><span class="s1">(</span><span class="s4">'input'</span><span class="s1">);</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s6">var</span><span class="s1"> comment </span><span class="s6">=</span><span class="s1"> $input.</span><span class="s3">val</span><span class="s1">();</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
        <p class="p2"><span class="s1"></span><br></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s6">if</span><span class="s1"> (comment </span><span class="s6">!=</span><span class="s1"> </span><span class="s4">""</span><span class="s1">) {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s6">var</span><span class="s1"> html </span><span class="s6">=</span><span class="s1"> </span><span class="s3">$</span><span class="s1">(</span><span class="s4">'&lt;li&gt;'</span><span class="s1">).</span><span class="s5">text</span><span class="s1">(comment);</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>html.</span><span class="s3">prependTo</span><span class="s1">(</span><span class="s4">'#comments'</span><span class="s1">);</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>$input.</span><span class="s3">val</span><span class="s1">(</span><span class="s4">""</span><span class="s1">);</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
        <p class="p2"><span class="s1"></span><br></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s6">return</span><span class="s1"> </span><span class="s5">false</span><span class="s1">;</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
        <p class="p2"><span class="s1"></span><br></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s1">}</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p2"><span class="s1"></span><br></p>
        <p class="p2"><span class="s1"></span><br></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p3"><span class="s1"></span><br></p>
      </td>
      <td valign="top" class="td1">
        <p class="p4"><span class="s3">$</span><span class="s1">(</span><span class="s5">document</span><span class="s1">).</span><span class="s3">ready</span><span class="s1">(main);</span></p>
      </td>
    </tr>
  </tbody>
</table>
</body>
</html>
