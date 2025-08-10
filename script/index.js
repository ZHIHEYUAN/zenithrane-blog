function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('邮箱地址已复制到剪贴板: ' + text);
  }, function(err) {
    console.error('复制失败: ', err);
  });
}