import "./globals.css";
import Script from 'next/script'

export const metadata = {
  title: "Photographer Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load theme CSS from the copied template under Photographer/... */}
        <link
          rel="stylesheet"
          href="/theme/admin/assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/theme/admin/assets/plugins/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="/theme/admin/assets/css/feathericon.min.css"
        />
        <link
          rel="stylesheet"
          href="/theme/admin/assets/plugins/morris/morris.css"
        />
        <link
          rel="stylesheet"
          href="/theme/admin/assets/css/custom.css"
        />

		<link rel="shortcut icon" href="/theme/admin/assets/img/favicon.png" type="image/x-icon"/>
		<link rel="apple-touch-icon" sizes="180x180" href="/theme/admin/assets/img/apple-touch-icon.png"/>
		<script src="/theme/admin/assets/js/theme-script.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
		<link rel="stylesheet" href="/theme/admin/assets/css/bootstrap.min.css"/>
		<link rel="stylesheet" href="/theme/admin/assets/plugins/fontawesome/css/fontawesome.min.css"/>
		<link rel="stylesheet" href="/theme/admin/assets/plugins/fontawesome/css/all.min.css"/>
		<link rel="stylesheet" href="/theme/admin/assets/css/iconsax.css"/>
		<link rel="stylesheet" href="/theme/admin/assets/plugins/daterangepicker/daterangepicker.css"/>
		<link rel="stylesheet" href="/theme/admin/assets/plugins/select2/css/select2.min.css"/>
    	<link rel="stylesheet" href="/theme/admin/assets/css/feather.css"/>
		<link rel="stylesheet" href="/theme/admin/assets/css/custom.css"/>
      </head>
      <body>
        {children}

        {/* Template scripts (jQuery, Bootstrap, plugins, script.js) */}
        <Script src="/theme/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <script src="/theme/admin/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/theme/admin/assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="/theme/admin/assets/plugins/raphael/raphael.min.js"></script>
        <script src="/theme/admin/assets/plugins/morris/morris.min.js"></script>
        <script src="/theme/admin/assets/js/chart.morris.js"></script>
        <script src="/theme/admin/assets/js/script.js"></script>
		<script src="/theme/admin/assets/plugins/select2/js/select2.min.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
		<script src="/theme/admin/assets/js/moment.min.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
		<script src="/theme/admin/assets/plugins/daterangepicker/daterangepicker.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
        <script src="/theme/admin/assets/plugins/theia-sticky-sidebar/ResizeSensor.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
        <script src="/theme/admin/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
		<script src="/theme/admin/assets/js/script.js" type="f77e2b07aac8399c0db39707-text/javascript"></script>
      </body>
    </html>
  );
}
