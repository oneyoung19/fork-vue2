let decoder

export default {
  /*
    - 处理各种编码情况（如 &#38;、&#x26; 等数字实体）
    - 使用浏览器原生能力，比手动解析更可靠
    - 确保 HTML 内容被正确解析，避免 XSS 等安全问题
    const decoder = entityDecoder.decode('&lt;div&gt;Hello&amp;World&lt;/div&gt;');
    console.log(decoder); // 输出: <div>Hello&World</div>
  */
  decode(html: string): string {
    decoder = decoder || document.createElement('div')
    decoder.innerHTML = html
    return decoder.textContent
  }
}
