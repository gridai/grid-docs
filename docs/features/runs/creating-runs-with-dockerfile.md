:::note
The examples assume you have already installed and setup Grid. If you haven't already please visit the [Getting Started](https://docs.grid.ai/getting-started) page.
Also, if you encounter issues please check the [FAQ](https://docs.grid.ai/features/runs/troubleshooting.md). We periodically update this with user questions.
:::

# Creating Runs from a Dockerfile
## Running Experiments With a Dockerfile

Grid supports the creation of Runs using `Dockerfile` files. Dockerfiles are a container specification that determines how images are be built. You can find documentation about Dockerfiles [here](https://docs.docker.com/engine/reference/builder).

### Step 0: Create a Dockerfile

Here's an example repository:

```text
 .
├── Dockerfile
└── run.py      # Script we want to run
```

The `Dockerfile` must be valid in order for it to work. Here's an example:

```text
# base image you want to use
# make sure to use a CUDA image if running on GPUs
# FROM nvidia/cuda:XX.X-cudnnX-devel-ubuntuXX.XX
FROM python:3.9.6-slim

# these two lines are mandatory
WORKDIR /gridai/project
COPY . .

# any RUN commands you'd like to run
# use this to install dependencies
RUN pip install pytorch-lightning && \
    apt install curl -y
```

:::note
Two lines are mandatory:

* **`WORKDIR /gridai/project`** : determines which WORKDIR to use. Grid expects your executable to be found in this directory.
* **`COPY . .` :** copies all your repository files into the image.

Everything else is up to you.
:::

### Step 1: Create a Run

You will need to create a run using the flag `--dockerfile` where you pass the location of your Dockerfile.

```text
$ grid run --dockerfile Dockerfile --localdir run.py
⠙ Submitting Run divergent-piculet-508 ...
upload ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100.0%
⠦ Making query to Grid
                    Run submitted!
                    `grid status` to list all runs
                    `grid status divergent-piculet-508` to see all experiments for this run

                    ----------------------
                    Submission summary
                    ----------------------
                    script:                  run.py
                    instance_type:           t2.medium
                    use_spot:                False
                    cloud_provider:          aws
                    cloud_credentials:       cc-grv4f
                    grid_name:               divergent-piculet-508
                    datastore_name:          None
                    datastore_version:       None
                    datastore_mount_dir:     None
```

#### Step 2: View Build Logs

Then you are able to follow both build and experiment logs with the CLI or web UI.

```text
# shows last 10 lines
# experiment has run successfully
$ grid logs divergent-piculet-508-exp0 -l 10 --show-build-logs

⠋ Fetching logs ...GraphQL URL: https://staging.grid.ai/graphql
[build] [2021-06-30T21:55:58.139136+00:00]   Stored in directory: /root/.cache/pip/wheels/2f/a0/d3/4030d9f80e6b3be787f19fc911b8e7aa462986a40ab1e4bb94
[build] [2021-06-30T21:55:58.142745+00:00] Successfully built future
[build] [2021-06-30T21:55:58.437950+00:00] Installing collected packages: urllib3, pyasn1, idna, chardet, certifi, six, rsa, requests, pyasn1-modules, oauthlib, multidict, cachetools, yarl, typing-extensions, requests-oauthlib, pyparsing, google-auth, attrs, async-timeout, werkzeug, torch, tensorboard-plugin-wit, protobuf, packaging, numpy, markdown, grpcio, google-auth-oauthlib, fsspec, aiohttp, absl-py, tqdm, torchmetrics, tensorboard, PyYAML, pyDeprecate, future, pytorch-lightning
[build] [2021-06-30T21:56:17.643380+00:00] Successfully installed PyYAML-5.4.1 absl-py-0.13.0 aiohttp-3.7.4.post0 async-timeout-3.0.1 attrs-21.2.0 cachetools-4.2.2 certifi-2021.5.30 chardet-4.0.0 fsspec-2021.6.1 future-0.18.2 google-auth-1.32.1 google-auth-oauthlib-0.4.4 grpcio-1.38.1 idna-2.10 markdown-3.3.4 multidict-5.1.0 numpy-1.21.0 oauthlib-3.1.1 packaging-20.9 protobuf-3.17.3 pyDeprecate-0.3.0 pyasn1-0.4.8 pyasn1-modules-0.2.8 pyparsing-2.4.7 pytorch-lightning-1.3.7.post0 requests-2.25.1 requests-oauthlib-1.3.0 rsa-4.7.2 six-1.16.0 tensorboard-2.4.1 tensorboard-plugin-wit-1.8.0 torch-1.9.0 torchmetrics-0.4.0 tqdm-4.61.1 typing-extensions-3.10.0.0 urllib3-1.26.6 werkzeug-2.0.1 yarl-1.6.3
[build] [2021-06-30T21:56:17.643396+00:00] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[build] [2021-06-30T21:56:18.023729+00:00] INFO[0046] Taking snapshot of full filesystem...
[build] [2021-06-30T21:57:08.467108+00:00] INFO[0096] Pushing layer 302180240179.dkr.ecr.us-east-1.amazonaws.com/grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32:a0beb2d8d5c91e8e9c636fbf169c1b09e4e4814adab8b4ab36531c8ec69c0bd0 to cache now
[build] [2021-06-30T21:57:08.467247+00:00] WARN[0096] error uploading layer to cache: getting tag for destination: repository can only contain the runes `abcdefghijklmnopqrstuvwxyz0123456789_-./`: grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32
[build] [2021-06-30T21:57:08.729481+00:00] INFO[0097] Pushing image to 302180240179.dkr.ecr.us-east-1.amazonaws.com/grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32
[build] [2021-06-30T21:58:40.454430+00:00] INFO[0188] Pushed image to 1 destinations
[experiment] [2021-06-30T22:12:07.252114+00:00] Loop 90
[experiment] [2021-06-30T22:12:07.252118+00:00] Loop 91
[experiment] [2021-06-30T22:12:07.252121+00:00] Loop 92
[experiment] [2021-06-30T22:12:07.252125+00:00] Loop 93
[experiment] [2021-06-30T22:12:07.252129+00:00] Loop 94
[experiment] [2021-06-30T22:12:07.252132+00:00] Loop 95
[experiment] [2021-06-30T22:12:07.252136+00:00] Loop 96
[experiment] [2021-06-30T22:12:07.252142+00:00] Loop 97
[experiment] [2021-06-30T22:12:07.252146+00:00] Loop 98
[experiment] [2021-06-30T22:12:07.252150+00:00] Loop 99
```

## Reuse Cached Docker Images
After creating a Run Grid will cache the image. This is especially useful when your Run image has a lot of dependencies and takes a long time to build. You can take full advantage of the cache by taking the push ref and using it in the FROM statement within your Dockerfile. Be sure to include the mandatory lines as noted below in the example. You can find the push ref with the following syntax.

`grid logs --show-build-logs <run-name>-exp0 | grep "pushing manifest" | head -n 1`

For example with a run named "foo" you can extract the image reference with the following code.

`grid logs --show-build-logs foo-exp0 | grep "pushing manifest" | head -n 1`

This will result in output similar to the following:

`[build] [2022-03-21T18:21:12.800584+00:00] #8 pushing manifest for 302180240179.dkr.ecr.us-east-1.amazonaws.com/prod-2:01fyptkm18naj1mdye64eqws2p@sha256:e142c254d19c8c858bf52b938858d047d13a015998b9bf3f5d2baadce9a187ea`

Take the full ECR address as the FROM reference within your Dockerfile. In this example your Dockerfile would be:

```
FROM 302180240179.dkr.ecr.us-east-1.amazonaws.com/prod-2:01fyptkm18naj1mdye64eqws2p@sha256:e142c254d19c8c858bf52b938858d047d13a015998b9bf3f5d2baadce9a187ea

# these two lines are mandatory
WORKDIR /gridai/project
COPY . .
```


## Testing Your Dockerfile Locally

It is a good idea to test that your `Dockerfile` builds locally before sending it to Grid. This may allow you to iterate quickly over a set of configurations that work before submitting experiments.

You can do that by building it with Docker:

```text
docker build --tag test-image .
```

If the image builds, your `Dockerfile` is correctly defined.

After building your image, make sure to also test that your script works as expected inside of it. For example, if your script is called `model.py` then you would want to test your new image with:

```text
docker run test-image python model.py
```

Grid will be running a similar process in the backend, so if this works locally in our machine chances are that it will also run successfully on Grid.
