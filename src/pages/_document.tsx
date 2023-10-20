import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createEmotionCache } from '@/utils/create-emotion-cache';
import type { TripTribeAppProps } from './_app';
import { ComponentProps, ComponentType, ReactElement } from 'react';
import type { DocumentContext, DocumentProps } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import type { AppType } from 'next/app';

interface CustomDocumentProps extends DocumentProps {
  emotionStyleTags: ReactElement[];
}

function TripTribeDocument({ emotionStyleTags }: CustomDocumentProps) {
  return (
    <Html lang="en">
      {emotionStyleTags}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

TripTribeDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: ComponentType<ComponentProps<AppType> & TripTribeAppProps>) =>
        function EnhanceApp(props) {
          return (
            <App
              emotionCache={cache}
              {...props}
            />
          );
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default TripTribeDocument;
