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
          id: "getting-started/getting-started",
          label: "Getting Started with Grid",
        },
        {
          type: "doc",
          id: "getting-started/typical-workflow-cli-user",
          label: "Typical Workflow (CLI)",
        },
        {
          type: "doc",
          id: "getting-started/typical-workflow-web-user",
          label: "Typical Workflow (Web)",
        },
        {
          type: "doc",
          id: "getting-started/your-login-credentials",
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
            { type: "doc", id: "features/datastores/README", label: "Overview" },
            { type: "doc", id: "features/datastores/create", label: "Create" },
            {
              type: "doc",
              id: "features/datastores/create-from-a-session",
              label: "Create from a Session",
            },
            {
              type: "doc",
              id: "features/datastores/create-from-a-cluster",
              label: "Create from a Cluster",
            },
            { type: "doc", id: "features/datastores/periodic-upload", label: "Periodic Upload" },
            { type: "doc", id: "features/datastores/datastore-faq", label: "Datastores FAQ" },
          ],
        },
        {
          type: "category",
          label: "Sessions",
          items: [
            { type: "doc", id: "features/sessions/README", label: "Overview" },
            {
              type: "category",
              label: "Setup Sessions",
              items: [
                { type: "doc", id: "features/sessions/github-login", label: "Github login" },
                { type: "doc", id: "features/sessions/pause", label: "Pause" },
                { type: "doc", id: "features/sessions/attaching-datastores", label: "Attaching Datastores" },
                { type: "doc", id: "features/sessions/machines", label: "Machines" },
              ],
            },
            {
              type: "category",
              label: "Use Sessions",
              items: [
                { type: "doc", id: "features/sessions/changing-instance-type", label: "Changing Session Instance Type" },
                { type: "doc", id: "features/sessions/jupyterlab-with-sessions", label: "JupyterLab with Sessions" },
                { type: "doc", id: "features/sessions/how-to-ssh-into-a-session", label: "SSH into a Session" },
                { type: "doc", id: "features/sessions/vscode-with-sessions", label: "VSCode with Sessions" },
                {
                  type: "doc",
                  id: "features/sessions/using-julia-and-r-languages-in-sessions",
                  label: "Julia and R languages in Sessions",
                },
              ],
            },
            { type: "doc", id: "features/sessions/faq", label: "Sessions FAQ" },
          ],
        },
        {
          type: "category",
          label: "Runs",
          items: [
            { type: "doc", id: "features/runs/README", label: "Overview" },
            {
              type: "category",
              label: "Setup",
              items: [
                { type: "doc", id: "features/runs/script-dependencies", label: "Script dependencies" },
                { type: "doc", id: "features/runs/attaching-datastores", label: "Attaching Datastores" },
                { type: "doc", id: "features/runs/sweep-syntax", label: "Hyperparameter Sweeps" },
                { type: "doc", id: "features/runs/private-repos", label: "Private Repos" },
                { type: "doc", id: "features/runs/machines", label: "Machines" },
                { type: "doc", id: "features/runs/interruptible-machines", label: "Spot Instances" },
                { type: "doc", id: "features/runs/auto-resume-experiments", label: "Auto-Resume Experiments" },
                { type: "doc", id: "features/runs/localdir", label: "Run Experiments from Local Directory" },
              ],
            },
            {
              type: "category",
              label: "Analyzing Experiments",
              items: [
                { type: "doc", id: "features/runs/viewing-logs", label: "Viewing logs" },
                { type: "doc", id: "features/runs/artifacts", label: "Artifacts" },
                { type: "doc", id: "features/runs/metrics-charts", label: "Metrics (charts)" },
                { type: "doc", id: "features/runs/failed-jobs", label: "Failed Jobs" },
              ],
            },
            {
              type: "category",
              label: "Advanced",
              items: [
                { type: "doc", id: "features/runs/yaml-configs/README", label: "YAML Configs" },
                { type: "doc", id: "features/runs/actions", label: "Actions" },
                { type: "doc", id: "features/runs/yaml-configs/yaml-api", label: "YAML API" },
                {
                  type: "doc",
                  id: "features/runs/running-experiments-with-a-dockerfile",
                  label: "Running Experiments With Dockerfiles",
                },
                { type: "doc", id: "features/runs/multi-node", label: "Multinode Training (BETA)" },
              ],
            },

            { type: "doc", id: "features/runs/faq", label: "Runs FAQ" },
          ],
        },
        {
          type: "category",
          label: "Mobile",
          items: [
            { type: "doc", id: "features/mobile/README", label: "Overview" },
            { type: "doc", id: "features/mobile/metrics", label: "Metrics" },
            { type: "doc", id: "features/mobile/stop-experiments", label: "Stop Experiments" },
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
            { type: "doc", id: "examples/running-with-different-frameworks/running-pytorch-lightning", label: "PyTorch Lightning" },
            { type: "doc", id: "examples/running-with-different-frameworks/running-tensorflow-or-keras", label: "Tensorflow or Keras" },
            { type: "doc", id: "examples/running-with-different-frameworks/running-julia-programs", label: "Julia" },
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
              id: "platform/custom-cloud-credentials/byoc",
              label: "BYOC Overview",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/prereq-installation",
              label: "BYOC Prerequisites",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/adding-custom-cloud-credentials",
              label: "Grid-Managed BYOC",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/customer-managed-byoc",
              label: "Customer-Managed BYOC",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/grid-cluster-context",
              label: "Cluster Context",
            },
            {
              type: "doc",
              id: "platform/custom-cloud-credentials/troubleshooting",
              label: "Troubleshooting BYOC",
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
