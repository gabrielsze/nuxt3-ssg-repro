<script setup>
const route = useRoute();
const router = useRouter();

const devRootPort = "http://localhost:3000";
const { data: post } = await useAsyncData(
  `${route.params.id}`,
  async () => {
    return $fetch(`${devRootPort}/data/indexSimple.json`, {
      params: {
        slug: route.params.id,
      },
    }).catch((error) => error.data);
  },
  {
    transform: (resData) => {
      const dealId = route.params.id.split("-").pop();
      const targetDeal = resData.find((x) => x.id == dealId);
      return targetDeal;
    },
  }
);

onMounted(() => {
  console.log("post: ", post);
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