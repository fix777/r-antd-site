export default () => (
  <style>{`
    .header {
      background: #fff;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      width: 120px;
      height: 31px;
      border-radius: 6px;
      margin: 0 28px 16px 0;
      float: left;
    }

    .sider {
      background: #333;
    }

    .content {
      background: #fff;
      padding: 24px;
      margin: 0;
      min-height: calc(100vh - 130px);
      max-height: calc(100vh - 130px);
      overflow: auto;
    }
  `}</style>
);
