import eventItemTemplate from '../views/components/event-item.marko';

// ugly workaround
function cleanupHtml(html) {
  html = html.replace(
    /^<script type="module" src="\/@vite\/client"><\/script>/,
    ''
  );
  html = html.replace(
    /<script async type="module" src="([\w?/.-]+)"><\/script>$/,
    ''
  );
  return html;
}

async function renderToString(template, viewModel) {
  const html = await new Promise((resolve, reject) => {
    eventItemTemplate.renderToString({ eventItem }, (err, html) => {
      if (err) reject(err);
      else resolve(html);
    });
  });
  return html;
}

const eventItem = {
  url: 'https://www.bonniernewsevents.se/d/lrqhp8',
  headline: 'Möten & Koncept Intranät',
  id: 'aa7f4087-f5d9-4284-809e-4a44b17c858d',
  startDate: '2021-01-01T08:00:00.000Z',
  endDate: '2030-01-01T16:00:00.000Z',
  format: 'In-person',
  status: 'Active',
  note: '',
};

describe('renderToString', () => {
  it('should render html without script tags', async () => {
    const html = await renderToString(eventItemTemplate, { eventItem });
    console.log(html);
    expect(/script/.test(html)).to.equal(false);
  });

  it('workaround', async () => {
    const html = await renderToString(eventItemTemplate, { eventItem });
    expect(/script/.test(cleanupHtml(html))).to.equal(false);
  });
});
