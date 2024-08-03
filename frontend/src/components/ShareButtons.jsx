import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareButtons = ({ tribute }) => {
  const shareUrl = `https://tributetookorafor.com/tribute/${tribute.id}`;
  const title = `Tribute to Emmanuel Okorafor from ${tribute.name}`;
  const description = tribute.description.substring(0, 650) + "..."; // Truncate description to 200 word
  const hashtags = ["TributeToOkorafor", "Remembrance"];

  return (
    <div className="flex space-x-2">
      <FacebookShareButton
        url={shareUrl}
        quote={`${title}\n\n${description}`}
        hashtag={`${title}\n\n${description}\n\n#TributeToOkorafor`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={`${title}\n\n${description}\n\nRead more and share your own tribute: ${shareUrl}`}
        hashtags={hashtags}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={`${title}\n\n${description}`}
        separator=" - "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body={`${description}\n\nRead more and share your own tribute: ${shareUrl}`}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
