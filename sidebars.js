// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "category",
      label: "GETTING STARTED",
      items: [
        {
          type: "doc",
          id: "start-here/getting-started",
          label: "Getting Started with Grid",
        },
        {
          type: "doc",
          id: "start-here/typical-workflow-cli-user",
          label: "Typical Workflow (CLI)",
        },
        {
          type: "doc",
          id: "start-here/typical-workflow-web-user",
          label: "Typical Workflow (Web)",
        },
        {
          type: "doc",
          id: "start-here/your-login-credentials",
          label: "Viewing Login Credentials",
        },
      ],
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        {
          type: "category",
          label: "Datastores",
          items: [
            { type: "doc", id: "products/add-data-to-grid-datastores/README", label: "Overview" },
            { type: "doc", id: "products/add-data-to-grid-datastores/create", label: "Create" },
            {
              type: "doc",
              id: "products/add-data-to-grid-datastores/create-from-a-session",
              label: "Create from a Session",
            },
            {
              type: "doc",
              id: "products/add-data-to-grid-datastores/create-from-a-cluster",
              label: "Create from a Cluster",
            },
            { type: "doc", id: "products/add-data-to-grid-datastores/periodic-upload", label: "Periodic Upload" },
            { type: "doc", id: "products/add-data-to-grid-datastores/datastore-faq", label: "Datastores FAQ" },
          ],
        },
        {
          type: "category",
          label: "Sessions",
          items: [
            { type: "doc", id: "products/sessions/README", label: "Overview" },
            {
              type: "category",
              label: "Setup",
              items: [
                { type: "doc", id: "products/sessions/github-login", label: "Github login" },
                { type: "doc", id: "products/sessions/pause", label: "Pause" },
                { type: "doc", id: "products/sessions/attaching-datastores", label: "Attaching Datastores" },
                { type: "doc", id: "products/sessions/machines", label: "Machines" },
              ],
            },
            {
              type: "category",
              label: "Connecting To a Session",
              items: [
                { type: "doc", id: "products/sessions/jupyterlab-with-sessions", label: "JupyterLab with Sessions" },
                { type: "doc", id: "products/sessions/how-to-ssh-into-a-session", label: "SSH into a Session" },
                { type: "doc", id: "products/sessions/vscode-with-sessions", label: "VSCode with Sessions" },
                {
                  type: "doc",
                  id: "products/sessions/using-julia-and-r-languages-in-sessions",
                  label: "Julia and R languages in Sessions",
                },
              ],
            },
            { type: "doc", id: "products/sessions/faq", label: "Sessions FAQ" },
          ],
        },
        {
          type: "category",
          label: "Runs",
          items: [
            { type: "doc", id: "products/runs/README", label: "Overview" },
            {
              type: "category",
              label: "Setup",
              items: [
                { type: "doc", id: "products/runs/script-dependencies", label: "Script dependencies" },
                { type: "doc", id: "products/runs/attaching-datastores", label: "Attaching Datastores" },
                { type: "doc", id: "products/runs/sweep-syntax", label: "Hyperparameter Sweeps" },
                { type: "doc", id: "products/runs/private-repos", label: "Private Repos" },
                { type: "doc", id: "products/runs/machines", label: "Machines" },
                { type: "doc", id: "products/runs/interruptible-machines", label: "Spot Instances" },
                { type: "doc", id: "products/runs/auto-resume-experiments", label: "Auto-Resume Experiments" },
              ],
            },
            {
              type: "category",
              label: "Analyzing Experiments",
              items: [
                { type: "doc", id: "products/runs/viewing-logs", label: "Viewing logs" },
                { type: "doc", id: "products/runs/artifacts", label: "Artifacts" },
                { type: "doc", id: "products/runs/metrics-charts", label: "Metrics (charts)" },
                { type: "doc", id: "products/runs/failed-jobs", label: "Failed Jobs" },
              ],
            },
            {
              type: "category",
              label: "Advanced",
              items: [
                { type: "doc", id: "products/runs/actions", label: "Actions" },
                { type: "doc", id: "products/runs/yaml-configs/yaml-api", label: "YAML API" },
                {
                  type: "doc",
                  id: "products/runs/running-experiments-with-a-dockerfile",
                  label: "Running Experiments With Dockerfiles",
                },
                { type: "doc", id: "products/runs/multi-node", label: "Multinode Training (BETA)" },
              ],
            },

            { type: "doc", id: "products/runs/faq", label: "Runs FAQ" },
          ],
        },
        {
          type: "category",
          label: "Mobile",
          items: [
            { type: "doc", id: "products/mobile/README", label: "Overview" },
            { type: "doc", id: "products/mobile/metrics", label: "Metrics" },
            { type: "doc", id: "products/mobile/stop-experiments", label: "Stop Experiments" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "EXAMPLES",
      items: [
        {
          type: "category",
          label: "Running With Different Frameworks",
          items: [
            { type: "doc", id: "examples/frameworks/running-pytorch-lightning", label: "PyTorch Lightning" },
            { type: "doc", id: "examples/frameworks/running-tensorflow-or-keras", label: "Tensorflow or Keras" },
            { type: "doc", id: "examples/frameworks/running-julia-programs", label: "Julia" },
          ],
        },
      ],
    },
    {
      type: "doc",
      label: "testing label",
      id: "cli/api",
    },
    {
      type: "doc",
      id: "platform/changelog",
      label: "CHANGELOG",
    },
    {
      type: "category",
      label: "PLATFORM",
      items: [
        {
          type: "category",
          label: "Billing",
          items: [
            { type: "doc", id: "platform/billing/billing-rates", label: "Billing Rates" },
            { type: "doc", id: "platform/billing/monitoring-costs", label: "Keeping Track of Costs" },
            { type: "doc", id: "platform/billing/billing-and-credits", label: "Payments and Credits" },
          ],
        },
        {
          type: "doc",
          label: "Collaboration",
          id: "platform/collaboration",
        },
        {
          type: "category",
          label: "Custom Cloud Credentials",
          items: [
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/adding-custom-cloud-credentials",
              label: "Creating a New Cluster",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/grid-cluster-context",
              label: "Cluster Context",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/troubleshooting",
              label: "Cluster Context",
            }
          ],
        },
        {
          type: "doc",
          label: "Report Feedback",
          id: "platform/report-feedback",
        },
        { type: "doc", id: "platform/tips-and-tricks", label: "Tips and Tricks" },
        { type: "doc", id: "platform/security-and-privacy", label: "Security and Privacy" },
        { type: "doc", id: "platform/sso", label: "Single Sign-On (SSO)" },
      ],
    },
    {
      type: "category",
      label: "SUPPORT",
      items: [
        { type: "link", label: "Slack", href: "https://gridai-community.slack.com", className: "slack-icon" },
        { type: "link", label: "Mail", href: "mailto:support@grid.ai", className: "mail-icon" },
      ],
    },
  ],
};

module.exports = sidebars;

// { type: "doc", id: "", label: "" },
