$(document).ready(function() {
      $('#textInput').on('input', function() {
        let text = $(this).val();
        
        
        let charCount = text.length;
        $('#charCount').text(charCount);
        
        
        let charNoSpace = text.replace(/\s/g, '').length;
        $('#charNoSpace').text(charNoSpace);
        
        
        let words = text.trim().split(/\s+/).filter(word => word.length > 0);
        $('#wordCount').text(words.length);
        
        
        let paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
        $('#paragraphCount').text(paragraphs.length);
      });
    });