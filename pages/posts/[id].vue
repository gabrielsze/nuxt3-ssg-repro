<script setup>
const route = useRoute();
const router = useRouter();

const isDev = false;

const devRootPort = "http://localhost:3000";
const { data: post } = await useAsyncData(
  `${route.params.id}`,
  async () => {
    if (isDev) {
      return $fetch(`${devRootPort}/data/indexSimple.json`, {
        params: {
          slug: route.params.id,
        },
      }).catch((error) => error.data);
    } else {
      const data = await import(`~/public/data/indexSimple.json`);
      const dealId = route.params.id.split("-").pop();
      const filteredData = data.default.find((x) => x.id == dealId);
      // console.log("filteredData: ", filteredData);
      return data.default;
    }
  },
  {
    transform: (resData) => {
      const dealId = route.params.id.split("-").pop();
      const targetDeal = resData.find((x) => x.id == dealId);
      // console.log("targetDeal: ", targetDeal);
      return targetDeal;
    },
  }
);
watch(() => route.fullPath, (newFullPath, oldFullPath) => {
  console.log(`Route changed from ${oldFullPath} to ${newFullPath}`);
});

onMounted(() => {
  // console.log("post: ", post);
});

// if (!post.value || error.value) {
//   throw createError({
//     statusCode: 404,
//     message: "Post not found",
//   });
// }
</script>

<template>
  <div>
    <h1>{{ post.name }}</h1>
    <p>{{ post.body }}</p>
    <NuxtLink class="link" :to="`/`">Back Home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.main {
}

.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>