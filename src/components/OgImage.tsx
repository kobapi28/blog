import type { Post } from '@/libs/schema/post'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'

export async function getOgImage(post: Omit<Post, 'slug'>) {
  const { title, tags, publishedAt } = post
  const fontData = (await getFontData()) as ArrayBuffer
  const width = 1200
  const height = 630

  const svg = await satori(
    <div
      style={{
        height,
        width,
        display: 'flex',
        backgroundImage: 'linear-gradient(105deg, rgba(242, 178, 53, 0.95) 0%, rgba(230, 207, 82, 0.96) 36%, rgba(241, 228, 160, 0.96) 66.24%, #E7E03D 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Noto Sans JP',
      }}
    >
      <div
        style={{
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          width: width - 64,
          height: height - 64,
          borderRadius: '24px',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '32px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: '#6a6d78',
              }}
            >
              kobapi.me/posts/
            </span>
            <span
              style={{
                color: '#10141c',
                fontSize: '48px',
              }}
            >
              {title}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '24px',
              color: '#6a6d78',
            }}
          >
            <span>
              date:
              {' '}
              {publishedAt}
            </span>
            <span>
              tags:
              {' '}
              {tags.join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
    ,
    {
      width,
      height,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: fontData,
        },
      ],
    },
  )

  const resvg = new Resvg(svg)

  return resvg.render().asPng()
}

async function getFontData() {
  const API = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700`

  const css = await (
    await fetch(API, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    })
  ).text()

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  )

  if (!resource) { return }

  return await fetch(resource[1]).then(res => res.arrayBuffer())
}
