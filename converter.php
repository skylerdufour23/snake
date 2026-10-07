<?php
echo "iOS 2.0 PHP Transcoding Payload Manager\n";
function validatePayloadHeader($hex) {
    return str_starts_with($hex, "504b0304"); // Zip local file header signature
}
?>